import React from 'react'
import FormComp from '../../components/FormComp';
function queryFunc()
{

}
const data = [
    {
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

    },
    {
      name: 'lastname',
      label: 'Last Name',
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
    },
    {
      name: 'dateofbirth',
      label: 'Date of Birth',
      rules: [
        {
          type: 'date',
          message: 'Enter the DOB',
        },
        {
          required: false,
          message: 'DOb is required!',
        },
      ],
      haveOption: false,
    },
    {
      name: 'gender',
      label: 'Gender',
      rules: [
        {
          required: false,
          message: 'Please select gender!',
        },
      ],
      haveOption: true,
      options: ['Male', 'Female', 'Other'],

    },
    {
      name: 'phone',
      label: 'Phone Number',
      rules: [
        {
          required: true,
          message: 'Please input your phone number!',
        },
      ],
      haveOption: false,
    },
    {
      name: 'Nationality',
      label: 'Nationality',
      rules: [
        {
          type: 'string',
          message: 'Must not contain numbers and special characters',
        },
        {
          required: true,
          message: 'Please input your nationality!',
        },
      ],

    },

  ]

export default function CreateQuery() {
    return (
        <div>
             <FormComp from={'profile'} data={data} apiFunc={queryFunc} formState={{
            FirstName: '',
            LastName: '',
            Phone: '',
            DOB: '',
            Gender: '',
            Nationality: '',
            Address: '',

          }} />
        </div>
    )
}
