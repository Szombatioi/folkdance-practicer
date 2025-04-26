import { createContext, useContext, useState } from 'react';

const SnackbarContext = createContext(null);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('info');

  const showSnackbar = (msg: string, sev: typeof severity) => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider value={{ open, message, severity, showSnackbar, setOpen }}>
      {children}
    </SnackbarContext.Provider>
  );
}

export const useSnackbar = () => useContext(SnackbarContext);
