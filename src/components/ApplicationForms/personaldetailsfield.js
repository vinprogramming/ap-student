const personaldetailsfield = {
    name: 'firstname',
            label: 'First Name',
            rules: [
              {
                type: 'string',
                message: 'Must not contain numbers and special characters',
              },
              {
                required: true,
                message: 'Please input your name!',
              },
            ],
            haveOption: false,
}