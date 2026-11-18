export function validateName(name) {
    const pattern = /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u;
    let error = ''
    if(name.trim().length < 2) {
        error += 'Имя слишком короткое;';
    }
    if(name.trim().length > 50) {
        error += 'Имя слишком длинное;';
    }
    if(name.trim().length!==0 && !pattern.test(name.trim())) {
        error += 'Вы использовали лишние символы в имени;';
    }
    return error;
}

export function validateVacancy(vacancy) {
    const pattern = /^[\p{L}\p{N}][\p{L}\p{M}\p{N} +#./()-]*$/u;
    let error = ''
    if(vacancy.trim().length < 2) {
        error += 'Название слишком короткое;';
    }
    if(vacancy.trim().length > 60) {
        error += 'Название слишком длинное;';
    }
    if(vacancy.trim().length!==0 && !pattern.test(vacancy.trim())) {
        error += 'Вы использовали лишние символы в названии вакансии;';
    }
    return error;
}

export function validatePhone(phone) {
    const pattern = /^\+?[\d\s()-]+$/;
    let error = ''
    if(phone.trim().length < 11) {
        error += 'Номер телефона слишком короткий;';
    }
    if(phone.trim().length!==0 && !pattern.test(phone.trim())) {
        error += 'Вы использовали лишние символы в номере телефона;';
    }
    return error;
}