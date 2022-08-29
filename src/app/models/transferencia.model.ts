import { CurrencyPipe } from "@angular/common";

export interface Transferencia {
  id?: number | string;
  valor: number;
  destino: string | number;
  data?: string;
};
