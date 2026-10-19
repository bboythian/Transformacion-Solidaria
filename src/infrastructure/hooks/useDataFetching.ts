/**
 * Custom Hooks
 * Lógica reutilizable para componentes
 */

import { useState, useEffect } from "react";
import { Instituto, Programa, Seccion } from "../../domain/entities/index.js";
import {
  instituteService,
  programaService,
} from "../../data/services/index.js";

/**
 * Hook para obtener información del instituto
 */
export const useInstitute = () => {
  const [institute, setInstitute] = useState<Instituto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await instituteService.getInfo();
        setInstitute(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { institute, loading, error };
};

/**
 * Hook para obtener secciones
 */
export const useSections = () => {
  const [sections, setSections] = useState<Seccion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await instituteService.getSections();
        setSections(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { sections, loading, error };
};

/**
 * Hook para obtener programas
 */
export const useProgramas = () => {
  const [programas, setProgramas] = useState<Programa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await programaService.getProgramas();
        setProgramas(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { programas, loading, error };
};

/**
 * Hook para obtener un programa por ID
 */
export const usePrograma = (id: string) => {
  const [programa, setPrograma] = useState<Programa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await programaService.getProgramaById(id);
        setPrograma(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { programa, loading, error };
};
