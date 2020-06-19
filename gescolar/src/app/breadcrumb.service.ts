import { MenuItem } from 'primeng/primeng';
import { Injectable } from '@angular/core';
import { Subject ,  Observable } from 'rxjs';


@Injectable()
export class BreadcrumbService {

    private itemsSource = new Subject<MenuItem[]>();

    itemsHandler = this.itemsSource.asObservable();

    setItems(items: MenuItem[]) {
        this.itemsSource.next(items);
    }
}
