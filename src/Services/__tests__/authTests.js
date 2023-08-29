import { renderHook, act } from '@testing-library/react-hooks';
import { API } from '../API'; 

describe('useRegisterUserMutation', () => {
  it('registers a user successfully', async () => {
    const mockUserData = { email: 'test@example.com', password: 'testPassword' };
    const { result, waitForNextUpdate } = renderHook(() => API.useRegisterUserMutation());

    // Симулюємо виклик хука
    act(() => {
      result.current[0](mockUserData);
    });

    // Очікуємо завершення хука
    await waitForNextUpdate();

    // Очікуємо, що користувач був успішно зареєстрований
    expect(result.current[1].data).toEqual('data-from-server'); // Замініть на дані з сервера
  });

  it('handles registration error', async () => {
    const mockUserData = { email: 'test@example.com', password: 'testPassword' };
    const { result, waitForNextUpdate } = renderHook(() => API.useRegisterUserMutation());

    // Симулюємо виклик хука з помилковою відповіддю сервера
    act(() => {
      result.current[0](mockUserData);
    });
    await waitForNextUpdate();

    // Очікуємо, що хук поверне помилку
    expect(result.current[1].error).toBeTruthy();
  });
});

describe('useLoginUserMutation', () => {
  it('logs in a user successfully', async () => {
    const mockCredentials = { email: 'test@example.com', password: 'testPassword' };
    const { result, waitForNextUpdate } = renderHook(() => API.useLoginUserMutation());

    // Симулюємо виклик хука
    act(() => {
      result.current[0](mockCredentials);
    });

    // Очікуємо завершення хука
    await waitForNextUpdate();

    // Очікуємо, що користувач був успішно авторизований
    expect(result.current[1].data).toEqual('data-from-server'); // Замініть на дані з сервера
  });

  it('handles login error', async () => {
    const mockCredentials = { email: 'test@example.com', password: 'testPassword' };
    const { result, waitForNextUpdate } = renderHook(() => API.useLoginUserMutation());

    // Симулюємо виклик хука з помилковою відповіддю сервера
    act(() => {
      result.current[0](mockCredentials);
    });
    await waitForNextUpdate();

    // Очікуємо, що хук поверне помилку
    expect(result.current[1].error).toBeTruthy();
  });
});

describe('useLogoutUserMutation', () => {
  it('logs out a user successfully', async () => {
    const { result, waitForNextUpdate } = renderHook(() => API.useLogoutUserMutation());

    // Симулюємо виклик хука
    act(() => {
      result.current[0]();
    });

    // Очікуємо завершення хука
    await waitForNextUpdate();

    // Очікуємо, що користувач був успішно вийшов з системи
    expect(result.current[1].data).toEqual('data-from-server'); // Замініть на дані з сервера
  });

  it('handles logout error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => API.useLogoutUserMutation());

    // Симулюємо виклик хука з помилковою відповіддю сервера
    act(() => {
      result.current[0]();
    });
    await waitForNextUpdate();

    // Очікуємо, що хук поверне помилку
    expect(result.current[1].error).toBeTruthy();
  });
});