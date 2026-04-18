import { NavLink, useNavigate } from 'react-router-dom';
import { Users, Package, UserCog, LogOut, LayoutDashboard, Bell, Settings, ChevronRight } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { to: '/clientes', label: 'Clientes', icon: Users },
  { to: '/proveedores', label: 'Proveedores', icon: Package },
  { to: '/usuarios', label: 'Usuarios', icon: UserCog },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/logout');

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 flex flex-col glass border-r border-white/5 z-50">
      {/* Logo */}
      <div className="p-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg">
            <LayoutDashboard size={18} className="text-white" />
          </div>
          <div>
            <p className="font-display font-700 text-sm text-white tracking-wide">AdminPanel</p>
            <p className="text-xs text-slate-500">v1.0 — 2025</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1">
        <p className="text-xs text-slate-600 uppercase tracking-widest font-600 px-3 mb-3 mt-1">Navegación</p>
        {navItems.map(({ to, label, icon: Icon, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'nav-active' : ''}`
            }
          >
            <Icon size={17} />
            {label}
            <ChevronRight size={14} className="ml-auto opacity-40" />
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-white/5 space-y-1">
        <NavLink to="/notificaciones" className="sidebar-item">
          <Bell size={17} />
          Notificaciones
          <span className="ml-auto bg-brand-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </NavLink>
        <NavLink to="/configuracion" className="sidebar-item">
          <Settings size={17} />
          Configuración
        </NavLink>
        <button onClick={handleLogout} className="sidebar-item w-full text-left text-red-400 hover:text-red-300 hover:bg-red-500/10">
          <LogOut size={17} />
          Cerrar Sesión
        </button>
      </div>

      {/* User pill */}
      <div className="p-3">
        <div className="glass rounded-xl p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center text-xs font-700 text-white">A</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-600 text-white truncate">Admin Principal</p>
            <p className="text-xs text-slate-500 truncate">admin@empresa.co</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></div>
        </div>
      </div>
    </aside>
  );
}
