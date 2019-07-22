import { mutations, getters, actions } from '../../../../src/store/modules/todos';
import mockedData from '../../__mocks__/getTodos';

describe('Mutations', () => {
  let todos;
  beforeEach(() => {
    todos = [];
  });

  it('should update the loading', () => {
    const { LOADING } = mutations;
    const state = { loading: false };

    LOADING(state, true);
    expect(state.loading).toBeTruthy();
  });

  it('should setTodos', () => {
    const { setTodos } = mutations;
    const state = { loading: false, todos };

    setTodos(state, [mockedData]);
    expect(state.todos).toHaveLength(1);
  });

  it('should addTodo', () => {
    const { addTodo } = mutations;
    const state = { loading: false, todos };

    addTodo(state, mockedData);

    expect(state.todos).toHaveLength(1);
  });

  it('should deleteTodo', () => {
    const { addTodo, deleteTodo } = mutations;
    const state = { loading: false, todos };

    addTodo(state, mockedData);

    // delete the Todo
    deleteTodo(state, 1);
    expect(state.todos).toHaveLength(0);
  });

  it('should updateTodo', () => {
    const { addTodo, updateTodo } = mutations;
    const state = { loading: false, todos };

    addTodo(state, mockedData);

    // update the Todo
    updateTodo(state, {
      id: 1,
      title: 'todo 1',
      completed: true,
    });
    expect(state.todos[0].completed).toBeTruthy();
  });
});

describe('Getters', () => {
  let state;
  beforeEach(() => {
    state = {
      laoding: false,
      todos: [],
    };
  });

  it('should get allTodos', () => {
    const { allTodos } = getters;
    const todos = allTodos(state);
    expect(state.todos).toBe(todos);
  });

  it('should getLoading', () => {
    const { getLoading } = getters;
    const loading = getLoading(state);
    expect(state.loading).toBe(loading);
  });
});

describe('actions', () => {
  let id;
  let todos;
  let limit;

  it('should getTodos', () => {
    const mockCommit = (state, payload) => {
      todos = payload;
    };

    actions.getTodos({ commit: mockCommit }).then(() => {
      expect(todos[0]).toEqual(mockedData);
    });
  });

  it('should postTodos', () => {
    const mockCommit = (state, payload) => {
      todos = payload;
    };

    actions.postTodo({ commit: mockCommit }).then(() => {
      expect(todos[0]).toEqual(mockedData);
    });
  });

  it('should postTodos', () => {
    const mockCommit = (state, payload) => {
      todos = payload;
    };

    actions.postTodo({ commit: mockCommit }).then(() => {
      expect(todos[0]).toEqual(mockedData);
    });
  });

  it('should deleteTodo', () => {
    const mockCommit = (state, payload) => {
      id = payload;
    };

    actions.deleteTodo({ commit: mockCommit }).then(() => {
      expect(id).not.toBeDefined();
    });
  });

  it('should filterTodos', () => {
    const mockCommit = (state, payload) => {
      todos = payload;
    };

    actions.filterTodos({ commit: mockCommit }).then(() => {
      expect(todos[0]).toEqual(mockedData);
    });
  });

  it('should filterTodos', () => {
    const mockCommit = (state, payload) => {
      todos = payload;
    };

    actions.filterTodos({ commit: mockCommit }, limit).then(() => {
      expect(todos[0]).toEqual(mockedData);
    });
  });

  it('should updateTodo', () => {
    const mockCommit = (state, payload) => {
      todos = payload;
    };

    actions.updateTodo({ commit: mockCommit }, todos).then(() => {
      expect(todos[0]).toEqual(mockedData);
    });
  });
});
