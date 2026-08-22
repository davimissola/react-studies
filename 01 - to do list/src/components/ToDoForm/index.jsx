import './to-do-form.css'


export function ToDoForm({ onSubmit }) {
    const aoFormSubmetido = (formData) => {
        const item = {
            id: 5,
            description: formData.get('description'),
            completed: false,
            createdAt: new Date().toLocaleDateString('pt-BR')
        }
        console.log(item.createdAt)
        onSubmit(item)
    }
    return (
        <form action={aoFormSubmetido} className='form-add'>
            <input type="text" placeholder='Digite o item que deseja adicionar' className='input-add' name='description' />
            <button className='btn-form-add'>Salvar item</button>
        </form>
    )
}