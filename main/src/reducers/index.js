const initialState = {
  content:         [],
  item:            {},
  loading:         true,
  saving:          false,
  failed:          false,
  longDescription: false,
  filterCountries: ['Brazil', 'Kenya', 'Columbia'],
  filterState:     {
    byCountry: '',
    bySearch:  ''
  },
  lastUrl:         ''
};


const reducer = (state = initialState, action) => {
  const {filterState} = state;
  switch (action.type) {
    case 'CONTENT_LOADED':
      return {
        ...state,
        content: action.payload,
        loading: false,
        failed:  false,
        lastUrl: ''
      };
    case 'ITEM_LOADED':
      return {
        ...state,
        item:            action.payload,
        loading:         false,
        failed:          false,
        longDescription: false,
        lastUrl:         ''
      };
    case 'CONTENT_REQUESTED':
      return {
        ...state,
        loading: true,
        failed:  false,
        lastUrl: action.payload
      };

    case 'SHOP_QUERY_CLEANUP':
      return {
        ...state,
        failed: action.failed
      };

    case 'SHOP_QUERY_FAILED':
      return {
        ...state,
        loading: false,
        failed:  action.failed
      };

    case 'LONG_DESCRIPTION':

      return {
        ...state,
        longDescription: action.payload
      };

    case 'FILTER_BY_COUNTRY':
      const {byCountry} = filterState;
      const newByCountry = action.payload;
      if (newByCountry === byCountry) {
        return state;
      }
      return {
        ...state,
        filterState: {
          byCountry: newByCountry,
          bySearch:  ''
        }
      };

    case 'FILTER_BY_SEARCH':
      const {bySearch} = filterState;
      const newBySearch = action.payload;
      if (newBySearch === bySearch) {
        return state;
      }
      return {
        ...state,
        filterState: {
          bySearch:  newBySearch,
          byCountry: ''
        }
      };

    case 'MESSAGE_SAVE':
      return {
        ...state,
        saving: true,
        failed: false
      };

    default:
      return state;
  }

};

export default reducer;