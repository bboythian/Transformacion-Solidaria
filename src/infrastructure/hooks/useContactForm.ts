/**
 * Hook para manejo de formularios
 */

import { useState } from "react";
import { ContactMessage } from "../../domain/entities/index.js";
import { contactService } from "../../data/services/index.js";

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<ContactMessage>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
    telefono: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
      telefono: "",
    });
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validación básica
      if (
        !formData.nombre ||
        !formData.email ||
        !formData.asunto ||
        !formData.mensaje
      ) {
        throw new Error("Por favor completa todos los campos requeridos");
      }

      // Enviar mensaje
      const response = await contactService.sendMessage(formData);

      if (response.success) {
        setSuccess(true);
        resetForm();
      } else {
        throw new Error(response.message || "Error desconocido");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar mensaje");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
