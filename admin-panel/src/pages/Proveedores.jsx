import { useState } from 'react';
import { Package, Search, Plus, Star, MoreHorizontal } from 'lucide-react';
import { proveedores } from '../data/mockData';

const estadoStyle = {
  Activo: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  Inactivo: 'bg-slate-500/15 text-slate-400 border border-slate-500/30',
};

const categoriaColor = {
  Hardware: 'bg-brand-500/15 text-brand-400',
  Papelería: 'bg-amber-500/15 text-amber-400',
  Software: 'bg-purple-500/15 text-purple-400',
  Logística: 'bg-cyan-500/15 text-cyan-400',
};

export default function Proveedores() {
  const [buscar, setBuscar] = useState('');
  const filtrados = proveedores.filter(p =>
    p.empresa.toLowerCase().includes(buscar.toLowerCase()) ||
    p.contacto.toLowerCase().includes(buscar.toLowerCase()) ||
    p.categoria.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <div className="p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display font-700 text-xl text-white">Proveedores</h2>
          <p className="text-slate-500 text-sm">{proveedores.length} proveedores registrados</p>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-500 px-4 py-2 rounded-xl transition-colors">
          <Plus size={16} /> Nuevo Proveedor
        </button>
      </div>

      <div className="glass rounded-xl p-4 border border-white/5 mb-4">
        <div className="relative max-w-sm">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={buscar}
            onChange={e => setBuscar(e.target.value)}
            placeholder="Buscar proveedor..."
            className="w-full bg-white/5 border border-white/8 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-purple-500/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtrados.map((p, i) => (
          <div
            key={p.id}
            className="glass rounded-2xl p-5 border border-white/5 glass-hover animate-slide-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both', opacity: 0 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-brand-600 flex items-center justify-center">
                <Package size={20} className="text-white" />
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-500 px-2 py-0.5 rounded-full ${estadoStyle[p.estado]}`}>
                  {p.estado}
                </span>
                <button className="text-slate-600 hover:text-slate-300 transition-colors">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>

            <h3 className="font-display font-700 text-white text-base mb-0.5">{p.empresa}</h3>
            <p className="text-slate-500 text-sm mb-3">{p.contacto}</p>

            <span className={`text-xs font-500 px-2.5 py-1 rounded-full ${categoriaColor[p.categoria] || 'bg-slate-500/15 text-slate-400'}`}>
              {p.categoria}
            </span>

            <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5">
              <p className="text-xs text-slate-500">{p.email}</p>
              <p className="text-xs text-slate-500">{p.telefono}</p>
            </div>

            <div className="mt-3 flex items-center gap-1.5">
              <Star size={13} className="text-amber-400 fill-amber-400" />
              <span className="text-sm font-600 text-white">{p.calificacion}</span>
              <span className="text-xs text-slate-500">/ 5.0</span>
            </div>
          </div>
        ))}
      </div>

      {filtrados.length === 0 && (
        <div className="text-center py-16 text-slate-500">
          <Package size={40} className="mx-auto mb-3 opacity-30" />
          <p>No se encontraron proveedores</p>
        </div>
      )}
    </div>
  );
}
