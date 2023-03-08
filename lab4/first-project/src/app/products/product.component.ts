import { Component, Input } from '@angular/core'
import { Product } from '../models/product'
@Component({
    selector: 'app-product-item',
    templateUrl: './product.component.html'

})
export class ProductComponent{
    @Input() products!:Product[]
    details = false
}
