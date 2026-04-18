import { Search, Bell, Sun } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'Dashboard',
  '/clientes': 'Gestión de Clientes',
  '/proveedores': 'Gestión de Proveedores',
  '/usuarios': 'Gestión de Usuarios',
  '/logout': 'Cerrar Sesión',
  '/notificaciones': 'Notificaciones',
  '/configuracion': 'Configuración',
};

export default function Topbar() {
  const { pathname } = useLocation();
  const title = titles[pathname] || 'Panel';

  return (
    <header className="h-16 glass border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-40">
      <div>
        <h1 className="font-display font-700 text-white text-lg">{title}</h1>
        <p className="text-xs text-slate-500">
          {new Date().toLocaleDateString('es-CO', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-white/5 border border-white/8 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-brand-500/50 w-48 transition-all"
          />
        </div>
        <button className="relative w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors glass-hover">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-500 rounded-full"></span>
        </button>
        <button className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors glass-hover">
          <Sun size={16} />
        </button>
      </div>
    </header>
  );
}
