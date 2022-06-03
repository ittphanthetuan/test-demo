import CustomHook from '../pages/hook/CustomHook';
import UseCallBack from '../pages/hook/UseCallBack';
import UseContext from '../pages/hook/UseContext';
import UseDebugValue from '../pages/hook/UseDebugValue';
import UseEffect from '../pages/hook/UseEffect';
import UseImperativeHandle from '../pages/hook/UseImperativeHandle';
import UseLayoutEffect from '../pages/hook/UseLayoutEffect';
import UseMemo from '../pages/hook/UseMemo';
import UseReducer from '../pages/hook/UseReducer';
import UseRef from '../pages/hook/UseRef';
import UseSyncExternalStore from '../pages/hook/UseSyncExternalStore';
import UseDeferredValue from '../pages/hook/UseDeferredValue';
import UseState from '../pages/hook/UseState';
import Lifecycle from '../pages/Lifecycle';
import ForwardRef from '../pages/ref/ForwardRef';
import GetRefInputOfChild from '../pages/ref/GetRefInputOfChild';
import DragDrop from '../pages/javascript-api/DragDrop';
import ScrollInToView from '../pages/javascript-api/ScrollInToView';
import ScrollTo from '../pages/javascript-api/ScrollTo';
import ScrollToTableInner from '../pages/javascript-api/ScrollToTableInner';
import BroadcastChannel from '../pages/javascript-api/BroadcastChannel';
import BubbleSort from '../pages/algorithm-sort/BubbleSort';
import HeapSort from '../pages/algorithm-sort/HeapSort';
import InsertionSort from '../pages/algorithm-sort/InsertionSort';
import SelectionSort from '../pages/algorithm-sort/SelectionSort';
import TestArr from '../pages/algorithm-game/TestArr';

const paths = [
  {
    label: 'Lifecycle', path: '/lifecycle', element: <Lifecycle />
  },
  {
    label: 'Hook',
    path: null,
    children: [
      { label: 'customHook', path: '/custom-hook', element: <CustomHook /> },
      { label: 'useCallBack', path: '/use-callback', element: <UseCallBack /> },
      { label: 'useContext', path: '/use-context', element: <UseContext /> },
      { label: 'useDeferredValue', path: '/use-deferred-value', element: <UseDeferredValue /> },
      { label: 'useDebugValue', path: '/use-debugValue', element: <UseDebugValue /> },
      { label: 'useEffect', path: '/use-effect', element: <UseEffect /> },
      { label: 'useImperativeHandle', path: '/use-imperativeHandle', element: <UseImperativeHandle /> },
      { label: 'useLayoutEffect', path: '/use-layoutEffect', element: <UseLayoutEffect /> },
      { label: 'useMemo', path: '/use-useMemo', element: <UseMemo /> },
      { label: 'useReducer', path: '/use-Reducer', element: <UseReducer /> },
      { label: 'useRef', path: '/use-ref', element: <UseRef /> },
      { label: 'UseState', path: '/use-state', element: <UseState /> },
      { label: 'useSyncExternalStore', path: '/use-sync-external-store', element: <UseSyncExternalStore /> },
    ],
  },
  {
    label: 'Ref',
    path: null,
    children: [
      { label: 'ForwardRef', path: '/forward-ref', element: <ForwardRef /> },
      { label: 'GetRefInputOfChild', path: '/get-ref-input-of-child', element: <GetRefInputOfChild /> }
    ]
  },

  {
    label: 'Javascript - Api',
    path: null,
    children: [
      { label: 'DragDrop', path: '/drag-drop', element: <DragDrop /> },
      { label: 'scrollInToView', path: '/scroll-in-to-view', element: <ScrollInToView /> },
      { label: 'ScrollTo', path: '/scroll-to', element: <ScrollTo /> },
      { label: 'ScrollToTableInner', path: '/scroll-to-table-inner', element: <ScrollToTableInner /> },
      { label: 'BroadcastChannel', path: '/broadcast-channel', element: <BroadcastChannel /> }
    ]
  },
  {
    label: 'Algorithm - Sort',
    path: null,
    children: [
      { label: 'Bubble Sort', path: '/bubble-sort', element: <BubbleSort /> },
      { label: 'Heap Sort', path: '/heap-sort', element: <HeapSort /> },
      { label: 'Insertion Sort', path: '/insertion-sort', element: <InsertionSort /> },
      { label: 'Selection Sort', path: '/selection-sort', element: <SelectionSort /> }
    ]
  },
  {
    label: 'Algorithm - Game',
    path: null,
    children: [
      { label: 'TestArr', path: '/test-arr', element: <TestArr /> },
    ]
  }
]

export default paths;