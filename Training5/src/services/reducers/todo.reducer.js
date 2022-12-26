import {
    ADD_TODO,
    DELETE_TODO,
    FILTER_TODO,
    GET_TODO_LIST,
    GET_TODO_LIST_SUCCESS,
    SEARCH_TODO,
    UPDATE_TODO,
} from "../constants/todoConstants";

const initialState = {
    todos: [],
    filterData: [],
    loading: false,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_LIST: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_TODO_LIST_SUCCESS: {
            return {
                ...state,
                todos: action.payload,
                filterData: action.payload,
                loading: false,
            };
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload],
                filterData: [...state.filterData, action.payload],
            };
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: [...state.todos].filter(
                    (todo) => todo.id !== action.payload
                ),
                filterData: [...state.filterData].filter(
                    (todo) => todo.id !== action.payload
                ),
            };
        }
        case UPDATE_TODO: {
            const { id, name, completed } = action.payload;
            return {
                ...state,
                todos: [...state.todos].map((todo) =>
                    todo.id === id
                        ? {
                              ...todo,
                              name: name,
                              completed: JSON.parse(completed),
                          }
                        : todo
                ),
                filterData: [...state.filterData].map((todo) =>
                    todo.id === id
                        ? {
                              ...todo,
                              name: name,
                              completed: JSON.parse(completed),
                          }
                        : todo
                ),
            };
        }
        case SEARCH_TODO: {
            return {
                ...state,
                filterData: state.todos.filter((todo) =>
                    todo.name.includes(action.payload)
                ),
            };
        }
        case FILTER_TODO: {
            return {
                ...state,
                filterData:
                    action.payload === "all"
                        ? [...state.todos]
                        : [...state.todos].filter(
                              (todo) =>
                                  todo.completed === JSON.parse(action.payload)
                          ),
            };
        }
        default:
            return state;
    }
};

export default todoReducer;
