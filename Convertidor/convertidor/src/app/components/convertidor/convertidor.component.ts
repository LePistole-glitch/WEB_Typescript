import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss']
})
export class ConvertidorComponent {
  cantidad:number = 0;
  tengo: string = "USD";
  quiero: string = "EUR";
  total: number = 0;
  //monedas: string[] = ['USD','EUR','LIBRA']                                     //Franco Suizo, 
  monedas: string[] = ['USD', 'EUR', 'LIBRA', 'MXN', 'JPY', 'CNY', 'CAD', 'ARG', 'CHF', 'COP'];
  constructor()
  {
    
  }
  ngOnInit(): void
  {

  }
  convertir(): void
  {
    switch(this.tengo)
    {
      case 'USD':
        if(this.quiero==='USD')
        {
          this.total=this.cantidad;
        }
        else if(this.quiero==='EUR')
        {
          this.total=this.cantidad * 0.84;
        }
        else if(this.quiero==='LIBRA')
        {
          this.total=this.cantidad * 0.75;
        }
        else if(this.quiero==='MXN')
        {
          this.total=this.cantidad * 18.95;
        }
        else if(this.quiero==='JPY')
        {
          this.total=this.cantidad * 132.68;
        }
        else if(this.quiero==='CNY')
        {
          this.total=this.cantidad * 6.90;
        }
        else if(this.quiero==='CAD')
        {
          this.total=this.cantidad * 1.38;
        }
        else if(this.quiero==='ARG')
        {
          this.total=this.cantidad * 202.54;
        }
        else if(this.quiero==='CHF')
        {
          this.total=this.cantidad * 0.92;
        }
        else if(this.quiero==='COP')
        {
          this.total=this.cantidad * 4836.19;
        }
        break;
        case 'EUR':
          if(this.quiero==='EUR')
          {
            this.total=this.cantidad;
          }
          else if(this.quiero==='USD')
          {
            this.total=this.cantidad * 1.07;
          }
          else if(this.quiero==='LIBRA')
          {
            this.total=this.cantidad * 0.88;
          }
          else if(this.quiero==='MXN')
          {
            this.total=this.cantidad * 20.01;
          }
          else if(this.quiero==='JPY')
          {
            this.total=this.cantidad * 139.80;
          }
          else if(this.quiero==='CNY')
          {
            this.total=this.cantidad * 7.27;
          }
          else if(this.quiero==='CAD')
          {
            this.total=this.cantidad * 1.45;
          }
          else if(this.quiero==='ARG')
          {
            this.total=this.cantidad * 213.41;
          }
          else if(this.quiero==='CHF')
          {
            this.total=this.cantidad * 0.97;
          }
          else if(this.quiero==='COP')
          {
            this.total=this.cantidad * 5101.41;
          }
          break;
          case 'LIBRA':
            if(this.quiero==='LIBRA')
            {
              this.total=this.cantidad;
            }
            else if(this.quiero==='USD')
            {
              this.total=this.cantidad * 1.22;
            }
            else if(this.quiero==='EUR')
            {
              this.total=this.cantidad * 1.13;
            }
            else if(this.quiero==='MXN')
            {
              this.total=this.cantidad * 22.84;
            }
            else if(this.quiero==='JPY')
            {
              this.total=this.cantidad * 159.55;
            }
            else if(this.quiero==='CNY')
            {
              this.total=this.cantidad * 8.30;
            }
            else if(this.quiero==='CAD')
            {
              this.total=this.cantidad * 1.66;
            }
            else if(this.quiero==='ARG')
            {
              this.total=this.cantidad * 243.41;
            }
            else if(this.quiero==='CHF')
            {
              this.total=this.cantidad * 1.11;
            }
            else if(this.quiero==='COP')
            {
              this.total=this.cantidad * 5824.41;
            }
            break;
            case 'MXN':
              if(this.quiero==='MXN')
              {
                this.total=this.cantidad;
              }
              else if(this.quiero==='EUR')
              {
                this.total=this.cantidad * 0.050;
              }
              else if(this.quiero==='LIBRA')
              {
                this.total=this.cantidad * 0.044;
              }
              else if(this.quiero==='USD')
              {
                this.total=this.cantidad * 0.053;
              }
              else if(this.quiero==='JPY')
              {
                this.total=this.cantidad * 6.97;
              }
              else if(this.quiero==='CNY')
              {
                this.total=this.cantidad * 0.36;
              }
              else if(this.quiero==='CAD')
              {
                this.total=this.cantidad * 0.073;
              }
              else if(this.quiero==='ARG')
              {
                this.total=this.cantidad * 10.66;
              }
              else if(this.quiero==='CHF')
              {
                this.total=this.cantidad * 0.049;
              }
              else if(this.quiero==='COP')
              {
                this.total=this.cantidad * 254.19;
              }
              break;
              case 'JPY':
                if(this.quiero==='JPY')
                {
                  this.total=this.cantidad;
                }
                else if(this.quiero==='EUR')
                {
                  this.total=this.cantidad * 0.0072;
                }
                else if(this.quiero==='LIBRA')
                {
                  this.total=this.cantidad * 0.0063;
                }
                else if(this.quiero==='MXN')
                {
                  this.total=this.cantidad * 0.14;
                }
                else if(this.quiero==='USD')
                {
                  this.total=this.cantidad * 0.0075;
                }
                else if(this.quiero==='CNY')
                {
                  this.total=this.cantidad * 0.052;
                }
                else if(this.quiero==='CAD')
                {
                  this.total=this.cantidad * 0.010;
                }
                else if(this.quiero==='ARG')
                {
                  this.total=this.cantidad * 1.53;
                }
                else if(this.quiero==='CHF')
                {
                  this.total=this.cantidad * 0.0070;
                }
                else if(this.quiero==='COP')
                {
                  this.total=this.cantidad * 36.52;
                }
              break;
        case 'CNY':
          if(this.quiero==='CNY')              
          {
            this.total=this.cantidad;
          }
          else if(this.quiero==='EUR')
          {
            this.total=this.cantidad * 0.14;
          }
          else if(this.quiero==='LIBRA')
          {
            this.total=this.cantidad * 0.12;
          }
          else if(this.quiero==='MXN')
          {
            this.total=this.cantidad * 2.76;
          }
          else if(this.quiero==='JPY')
          {
            this.total=this.cantidad * 6.97;
          }
          else if(this.quiero==='USD')
          {
            this.total=this.cantidad * 0.14;
          }
          else if(this.quiero==='CAD')
          {
            this.total=this.cantidad * 0.20;
          }
          else if(this.quiero==='ARG')
          {
            this.total=this.cantidad * 29.34;
          }
          else if(this.quiero==='CHF')
          {
            this.total=this.cantidad * 0.13;
          }
          else if(this.quiero==='COP')
          {
            this.total=this.cantidad * 701.19;
          }
          break;
          case 'CAD':
            if(this.quiero==='CAD')              
            {
              this.total=this.cantidad;
            }
            else if(this.quiero==='EUR')
            {
              this.total=this.cantidad * 0.69;
            }
            else if(this.quiero==='LIBRA')
            {
              this.total=this.cantidad * 0.60;
            }
            else if(this.quiero==='MXN')
            {
              this.total=this.cantidad * 13.80;
            }
            else if(this.quiero==='JPY')
            {
              this.total=this.cantidad * 96.97;
            }
            else if(this.quiero==='USD')
            {
              this.total=this.cantidad * 0.72;
            }
            else if(this.quiero==='CNY') //aaqui me quede!
            {
              this.total=this.cantidad * 5.01;
            }
            else if(this.quiero==='ARG')
            {
              this.total=this.cantidad * 147.34;
            }
            else if(this.quiero==='CHF')
            {
              this.total=this.cantidad * 0.13;
            }
            else if(this.quiero==='COP')
            {
              this.total=this.cantidad * 701.19;
            }
            break;
            case 'ARG':
            if(this.quiero==='ARG')              
            {
              this.total=this.cantidad;
            }
            else if(this.quiero==='EUR')
            {
              this.total=this.cantidad * 0.69;
            }
            else if(this.quiero==='LIBRA')
            {
              this.total=this.cantidad * 0.60;
            }
            else if(this.quiero==='MXN')
            {
              this.total=this.cantidad * 16.80;
            }
            else if(this.quiero==='JPY')
            {
              this.total=this.cantidad * 22.97;
            }
            else if(this.quiero==='USD')
            {
              this.total=this.cantidad * 0.72;
            }
            else if(this.quiero==='CNY') //aaqui me quede!
            {
              this.total=this.cantidad * 11.01;
            }
            else if(this.quiero==='CAD')
            {
              this.total=this.cantidad * 0.34;
            }
            else if(this.quiero==='CHF')
            {
              this.total=this.cantidad * 0.13;
            }
            else if(this.quiero==='COP')
            {
              this.total=this.cantidad * 701.19;
            }
            break;
            case 'CHF':
            if(this.quiero==='CHF')              
            {
              this.total=this.cantidad;
            }
            else if(this.quiero==='EUR')
            {
              this.total=this.cantidad * 1.69;
            }
            else if(this.quiero==='LIBRA')
            {
              this.total=this.cantidad * 0.60;
            }
            else if(this.quiero==='MXN')
            {
              this.total=this.cantidad * 3.80;
            }
            else if(this.quiero==='JPY')
            {
              this.total=this.cantidad * 6.97;
            }
            else if(this.quiero==='USD')
            {
              this.total=this.cantidad * 0.72;
            }
            else if(this.quiero==='CNY') //aaqui me quede!
            {
              this.total=this.cantidad * 1.01;
            }
            else if(this.quiero==='ARG')
            {
              this.total=this.cantidad * 47.34;
            }
            else if(this.quiero==='CAD')
            {
              this.total=this.cantidad * 1.13;
            }
            else if(this.quiero==='COP')
            {
              this.total=this.cantidad * 301.19;
            }
            break;
            case 'COP':
              if(this.quiero==='COP')              
              {
                this.total=this.cantidad;
              }
              else if(this.quiero==='EUR')
              {
                this.total=this.cantidad * 0.69;
              }
              else if(this.quiero==='LIBRA')
              {
                this.total=this.cantidad * 0.60;
              }
              else if(this.quiero==='MXN')
              {
                this.total=this.cantidad * 13.80;
              }
              else if(this.quiero==='JPY')
              {
                this.total=this.cantidad * 6.97;
              }
              else if(this.quiero==='USD')
              {
                this.total=this.cantidad * 0.72;
              }
              else if(this.quiero==='CNY') //aaqui me quede!
              {
                this.total=this.cantidad * 5.01;
              }
              else if(this.quiero==='ARG')
              {
                this.total=this.cantidad * 7.34;
              }
              else if(this.quiero==='CHF')
              {
                this.total=this.cantidad * 1.13;
              }
              else if(this.quiero==='CAD')
              {
                this.total=this.cantidad * 1.19;
              }
              break;
    }
  }
}
