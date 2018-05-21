const materialDataPickerStyle = {

    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                background: 'linear-gradient(171deg, rgb(85, 177, 0) 0%, rgb(55, 116, 0) 100%)',
                color: 'white'
            }
        },
        MuiPickersToolbarButton: {
            toolbarBtn: {
                fontFamily: '"Assistant", sans-serif !important',
                textTransform: 'lowercase',
                fontWeight: 'bold'
            }
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                color: 'white'
            },
            dayLabel: {
                color: 'purple'
            }
        },
        MuiPickersClock: {
            clock: {
                backgroundColor: 'rgb(247, 241, 217)'
            },
            pin: {
                backgroundColor: 'rgb(67,141,0)'
            }
        },
        MuiPickersClockPointer: {
            pointer: {
                backgroundColor: 'rgb(67,141,0)'
            },
            thumb: {
                borderColor: 'rgb(67,141,0)',
                width: '1px',
                height: '1px',
                borderWidth: '16px'
            }
        },
        MuiPickersDay: {
            day: {
                color: 'black',
                fontSize: '1rem'
            },
            selected: {
                backgroundColor: 'rgb(67,141,0)',
                fontSize: '1.2rem',
                fontFamily: '"Assistant", sans-serif !important',
                textTransform: 'lowercase',
                fontWeight: 'bold',
                color: 'white'
            },
            current: {
                color: 'white'
            }
        },
        MuiPickersModal: {
            dialogAction: {
                color: 'white',
                background: 'linear-gradient(171deg, rgb(85, 177, 0) 0%, rgb(55, 116, 0) 100%)',
                fontSize: '1.2rem',
                fontFamily: '"Assistant", sans-serif !important',
                textTransform: 'lowercase',
                fontWeight: 'bold'
            }
        }
    }
};

export default materialDataPickerStyle;
