import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SaboSpeiiInvoiceForm } from '../components/sabo-speii/InvoiceForm';
import { SaboSpeiiInvoicePreview } from '../components/sabo-speii/InvoicePreview';
import { Invoice } from '../types/invoice';
import { Home } from 'lucide-react';

export const SaboSpeiiInvoice = () => {
  const navigate = useNavigate();
  const [currentInvoice, setCurrentInvoice] = useState<Invoice | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = (invoice: Invoice) => {
    setCurrentInvoice(invoice);
    setShowPreview(true);
  };

  const handleBack = () => {
    setShowPreview(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Home Button */}
      {!showPreview && (
        <div className="bg-blue-600 text-white p-2">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm hover:bg-blue-700 px-2 py-1 rounded"
          >
            <Home size={16} />
            ទំព័រដើម / Home
          </button>
        </div>
      )}

      {showPreview && currentInvoice ? (
        <SaboSpeiiInvoicePreview invoice={currentInvoice} onBack={handleBack} />
      ) : (
        <SaboSpeiiInvoiceForm onPreview={handlePreview} />
      )}
    </div>
  );
};

