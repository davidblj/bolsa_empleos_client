
export class Form {

  constructor() {}

  buildBinaries<T>(formData: T): FormData {

    const form = new FormData();
    const keys = Object.keys(formData);

    keys.forEach(key => {

      if (formData.hasOwnProperty(key)) {
        form.append(key, formData[key]);
      }
    });

    return form;
  }
}
