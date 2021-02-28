const subscribeForm = document.querySelector('[data-id=subscribe-form]');
const idForm = document.querySelector('[data-id=id-form]');
const buttonAllTikets = document.querySelector('[data-id=buttonALLTikets]');
__webpack_base_uri__ = 'https://ahj-app.herokuapp.com';
DEBUG (webpack-specific)

subscribeForm.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();    
    const formData = new FormData(e.currentTarget);
    formData.append('method', 'createTicket');
    formData.append('id', null);
    formData.append('status', true);
    formData.append('created', new Date().toLocaleDateString());
    
    xhr.open('POST', 'https://ahj-app.herokuapp.com');
    xhr.send(formData);  
});

idForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const xhr = new XMLHttpRequest();    
    const queryString = `method=ticketById&id=${formData.get('id')}`;
    xhr.open('GET', `https://ahj-app.herokuapp.com/?${queryString}`);
    xhr.send();
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                
                console.log(xhr.responseText);
            } catch (e) {
                console.error(e);
            }
        }
    });   
});

buttonAllTikets.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();    
    const queryString = 'method=allTickets';
    xhr.open('GET', `https://ahj-app.herokuapp.com/?${queryString}`);
    xhr.send(); 
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                console.log(xhr.responseText);
            } catch (e) {
                console.error(e);
            }
        }
    }); 
});









