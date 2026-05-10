import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * SidebarNav component for FlexPrice UI.
 *
 * Full sidebar navigation with collapsible support, active route highlighting,
 * icon + label items, and optional badges.
 *
 * @prop items - Array of NavItem ({ label, icon, path, badge? })
 * @prop activePath - Current route path for highlighting the active item
 * @prop collapsed - Whether the sidebar is in collapsed (icon-only) mode
 * @prop onCollapse - Callback when the collapse toggle is clicked
 */

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: string | number;
  section?: string;
}

export interface SidebarNavProps {
  items: NavItem[];
  activePath?: string;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  onNavigate?: (path: string) => void;
  className?: string;
}

const SidebarNav = ({
  items,
  activePath = '/',
  collapsed = false,
  onCollapse,
  onNavigate,
  className,
}: SidebarNavProps) => {
  const sections = React.useMemo(() => {
    const map: Record<string, NavItem[]> = {};
    items.forEach((item) => {
      const key = item.section ?? '';
      map[key] = [...(map[key] ?? []), item];
    });
    return map;
  }, [items]);

  return (
    <nav
      className={cn(
        'flex flex-col h-full transition-all duration-300 ease-in-out',
        'relative',
        collapsed ? 'w-[64px]' : 'w-[240px]',
        className
      )}
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #111827 100%)',
      }}
      aria-label="Main navigation"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(50,147,217,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Logo area */}
      <div className={cn(
        'relative flex items-center h-[60px] border-b border-white/[0.06]',
        collapsed ? 'justify-center px-0' : 'px-5'
      )}>
        {!collapsed ? (
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg">
              <span className="text-white text-xs font-bold">F</span>
            </div>
            <span className="text-[15px] font-bold tracking-tight">
              <span className="text-white">Flex</span>
              <span className="text-sky-400">Price</span>
            </span>
          </div>
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg">
            <span className="text-white text-sm font-bold">F</span>
          </div>
        )}
      </div>

      {/* Nav items */}
      <div className="relative flex-1 overflow-y-auto py-3 space-y-0.5 px-2">
        {Object.entries(sections).map(([section, sectionItems]) => (
          <div key={section}>
            {section && !collapsed && (
              <p className="px-2.5 mb-1 mt-4 first:mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/25">
                {section}
              </p>
            )}
            {sectionItems.map((item) => {
              const isActive =
                activePath === item.path || activePath.startsWith(item.path + '/');
              return (
                <button
                  key={item.path}
                  onClick={() => onNavigate?.(item.path)}
                  title={collapsed ? item.label : undefined}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'w-full flex items-center rounded-lg transition-all duration-150',
                    'relative group outline-none',
                    'focus-visible:ring-1 focus-visible:ring-sky-500',
                    collapsed
                      ? 'justify-center h-10 w-10 mx-auto'
                      : 'gap-3 px-3 py-2.5',
                    isActive
                      ? [
                          'bg-white/[0.09] text-white',
                          'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]',
                        ]
                      : [
                          'text-white/50',
                          'hover:bg-white/[0.05] hover:text-white/80',
                        ]
                  )}
                >
                  {/* Active left bar */}
                  {isActive && !collapsed && (
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r-full bg-gradient-to-b from-sky-400 to-blue-500" />
                  )}

                  <span className={cn(
                    'flex-shrink-0 transition-transform duration-150',
                    '[&>svg]:h-4 [&>svg]:w-4',
                    isActive ? 'text-sky-400' : 'text-white/40 group-hover:text-white/70',
                    'group-hover:scale-110',
                  )}>
                    {item.icon}
                  </span>

                  {!collapsed && (
                    <>
                      <span className={cn(
                        'flex-1 text-left text-[13px] font-medium leading-none',
                        isActive ? 'text-white' : 'text-white/60 group-hover:text-white/85',
                      )}>
                        {item.label}
                      </span>
                      {item.badge !== undefined && (
                        <span className={cn(
                          'ml-auto inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full',
                          'px-1.5 text-[10px] font-bold',
                          isActive
                            ? 'bg-sky-500/30 text-sky-300'
                            : 'bg-white/10 text-white/50',
                        )}>
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Collapse toggle */}
      {onCollapse && (
        <div className="relative border-t border-white/[0.06] p-2">
          <button
            onClick={() => onCollapse(!collapsed)}
            className={cn(
              'w-full flex items-center rounded-lg transition-all duration-150',
              'text-white/30 hover:text-white/60 hover:bg-white/[0.05]',
              collapsed ? 'justify-center h-10 w-10 mx-auto' : 'gap-2 px-3 py-2'
            )}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4" />
                <span className="text-[12px] font-medium">Collapse</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

SidebarNav.displayName = 'SidebarNav';

export { SidebarNav };
