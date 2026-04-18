import { useNavigate } from 'react-router-dom';
import { LogOut, ShieldCheck } from 'lucide-react';

export default function Logout() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[calc(100vh-4rem)] animate-fade-in">
      <div className="glass rounded-3xl p-10 border border-red-500/20 text-center max-w-sm w-full mx-6" style={{boxShadow:'0 0 40px rgba(239,68,68,0.1)'}}>
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
          <LogOut size={32} className="text-red-400" />
        </div>
        <h2 className="font-display font-800 text-xl text-white mb-2">¿Cerrar Sesión?</h2>
        <p className="text-slate-400 text-sm mb-8">Estás a punto de salir del sistema administrativo. ¿Deseas continuar?</p>
        <div className="space-y-3">
          <button
            onClick={() => alert('Sesión cerrada. Redirigiendo al login...')}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-500 py-2.5 rounded-xl transition-colors text-sm"
          >
            Sí, cerrar sesión
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full glass glass-hover text-slate-300 font-500 py-2.5 rounded-xl transition-colors text-sm"
          >
            Cancelar
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-slate-600">
          <ShieldCheck size={13} />
          <span>Sesión protegida con cifrado TLS</span>
        </div>
      </div>
    </div>
  );
}
