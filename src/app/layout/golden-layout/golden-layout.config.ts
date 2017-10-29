export let CONFIG = {
  main: {
    content: [{
        type: 'row',
        content: [{
          type: 'component',
          componentName: 'main',
          componentState: {
            message:"Top Left"
          }
        }, {
          type: 'column',
          content: [{
            type: 'component',
            componentName: 'main',
            componentState: {
              message:"Top Right"
            }
          }, {
            type: 'component',
            componentName: 'main',
            componentState: {
              message:"Bottom Right"
            }
          }]
        }]
    }]
  }
};
