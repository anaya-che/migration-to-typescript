import './sources.css';
import { ISources } from '../../interface';

class Sources {
  draw(data: ISources[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
    const sourcesElement = <HTMLElement>document.querySelector('.sources');

    data.forEach((item: ISources): void => {
      const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);
      const sourceItemName = <HTMLElement>sourceClone.querySelector('.source__item-name');
      const sourceItem = <HTMLElement>sourceClone.querySelector('.source__item');

      sourceItemName.textContent = item.name;
      sourceItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    sourcesElement.append(fragment);
  }
}

export default Sources;
