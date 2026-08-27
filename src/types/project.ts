export type CategoriaProjeto = 'Programação' | 'Design' | 'Literatura' | 'Outros';

export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  categoria: CategoriaProjeto;
  data?: string;
  imagens: string[];
  svgs?: string[];
  codigoPreview?: string;
  linkExterno?: string;
}