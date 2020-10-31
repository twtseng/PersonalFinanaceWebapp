import authService from './api-authorization/AuthorizeService'

export default async () => {
    const token = await authService.getAccessToken();
    const response = await fetch('FinanceData/Bills', {
        headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    return data;
}

