

export function simpleAction() {
  console.log('two');
  return {
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  };
}