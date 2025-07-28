
export const MISKAR_J = {
    tdp: 20,
    v1: 70,
    aircraft_type: 'AS 365 N3+',
    aircraft_tail: 'TS-HSJ',
    field: 'sfax airport',
    frequencies: {
        vhf_marine: 'CH08',
        app: 123.7,
        hlo: 131.075,
        twr: 120.15,
        ndb: 260,
        vor: 114,
    },
    WayPoints1: {
        mc: {
            golf: 109,
            fir: 109,
            miskar: 109,
        },
        dist: {
            golf: 31,
            fir: 12,
            miskar: 19,
            sum:62
            
        },
        ete: {
            sfax: 145,
            golf: 13,
            fir: 5,
            miskar: 8,
            sum: 28
        },
        con_fuel: {
            golf: 22,
            fir: 25,
            miskar: 430,
        },
        r_fuel: {
            sfax: 450,
            golf: 385,
            fir: 360,
            miskar: 320,
        },
        alt: {
            golf: 2500,
            fir: 2500,
            miskar: 2500,
        },
        msa: {
            golf: 1000,
            fir: 1000,
            miskar: 1000,
        },
    }, ldg_perfo: {
        ldp: 220,
        vi: 25,
    },
    weight: {
        oew: {
            to1: 3045,
            ldg1: 3045,
            to2: 3045,
            ldg2: 3045,
        },
        fuel: {
            to1: 460,
            to2: 290
        }
    },
    WayPoints2: {
        mc: {
            golf: 289,
            fir: 289,
            miskar: 289,
        },
        dist: {
            golf: 12,
            fir: 19,
            sfax: 31,
            sum: 62
        },
        ete: {
            sfax: 13,
            golf: 5,
            fir: 8,
            miskar: 145,
            sum: 26
        },
        con_fuel: {
            golf: 25,
            fir: 40,
            miskar: 300,
            sfax: 65,
            sum: 130
        },
        r_fuel: {
            sfax: 160,
            golf: 225,
            fir: 250,
            miskar: 290,
        },
        alt: {
            golf: 2500,
            fir: 2500,
            miskar: 2500,
        },
        msa: {
            golf: 1000,
            fir: 1000,
            miskar: 1000,
        },

    }
}
export const ASHTART_I = {
    tdp: 20,
    v1: 70,
    vtoss: 75,
    aircraft_type: 'AS 365 N3',
    aircraft_tail: 'TS-HSJ',
    field: 'sfax airport',
    frequencies: {
        vhf_marine: 'CH09',
        app: 123.7,
        hlo: 122.85,
        twr: 120.15,
        ndb: 347,
        vor: 114,
    },
    WayPoints1: {
        mc: {
            m: 125,
            ashtart: 125
        },
        dist: {
            m: 22,
            ashtart: 22
        },
        ete: {
            sfx: 145,
            m: 9,
            ashtart: 9,
        },
        con_fuel: {
            sfx: 300,
            m: 45,
            ashtart: 45,
        },
        r_fuel: {
            sfx: 375,
            m: 330,
            ashtart: 330,
        },
        alt: {
            m: 1500,
            ashtart: 1500,
        },
        msa: {
            m: 1000,
            ashtart: 1000,
        },
    }, ldg_perfo: {
        ldp: 220,
        vi: 25,
    },
    weight: {
        oew: {
            to1: 3055,
            ldg1: 3055,
            to2: 3055,
            ldg2: 3055,
        },
        fuel: {
            to1: 375,
            to2: 240
        }
    },
    WayPoints2: {
        mc: {
            m: 305,
            sfx: 305,
        },
        dist: {
            m: 22,
            sfx: 22,
        },
        ete: {
            ashtart: 145,
            m: 9,
            sfx: 9,
        },
        con_fuel: {
            ashtart: 300,
            m: 45,
            sfx: 45,
        },
        r_fuel: {
            ashtart: 240,
            m: 195,
            sfx: 150,
        },
        alt: {
            m: 1500,
            ashtart: 1500,
        },
        msa: {
            m: 1000,
            ashtart: 1000,
        },
    }
}

export const HASDRUBAL_J = {
    tdp: 20,
    v1: 70,
    vtoss: 75,
    aircraft_type: 'AS 365 N3+',
    aircraft_tail: 'TS-HSJ',
    field: 'sfax airport',
    customer: 'SHELL',
    rig_ident: 'HASDRUBAL',
    position: 'N34°08’ - E011°36’',
    frequencies: {
        vhf_marine: 'CH08 (MISKAR)',
        hlo: 131.075,
        ndb: 390,
        app: 123.7,
        twr: 120.15,
        vor: 114.0,
    },
    WayPoints1: {
        mc: {
            mike: 125,
            fir: 125,
            hasdrubal: 125,
        },
        dist: {
            mike: 22,
            fir: 28,
            hasdrubal: 7,
        },
        ete: {
            sfax: 145,
            mike: 9,
            fir: 12,
            hasdrubal: 3,
        },
        con_fuel: {
            mike: 45,
            fir: 60,
            hasdrubal: 15,
        },
        r_fuel: {
            mike: 385,
            fir: 325,
            hasdrubal: 310,
        },
        alt: {
            mike: 2500,
            fir: 2500,
            hasdrubal: 2500,
        },
        msa: {
            mike: 1000,
            fir: 1000,
            hasdrubal: 1000,
        },
    },
    ldg_perfo: {
        ldp: 220,
        vi: 25,
    },
    weight: {
        oew: {
            to1: 3045,
            ldg1: 3045,
            to2: 3045,
            ldg2: 3045,
        },
        fuel: {
            to1: 440,
            to2: 280,
        }
    },
    WayPoints2: {
        mc: {
            hasdrubal: 305,
            fir: 305,
            mike: 305,
            sfax: 305,
        },
        dist: {
            hasdrubal: 7,
            fir: 28,
            mike: 22,
            sfax: 57, // total
        },
        ete: {
            hasdrubal: 3,
            fir: 12,
            mike: 9,
            sfax: 24, // total
        },
        con_fuel: {
            hasdrubal: 15,
            fir: 60,
            mike: 45,
            sfax: 120, // total
        },
        r_fuel: {
            hasdrubal: 265,
            fir: 205,
            mike: 160,
            sfax: 120, // approx
        },
        alt: {
            hasdrubal: 2500,
            fir: 2500,
            mike: 2500,
            sfax: 2500,
        },
        msa: {
            hasdrubal: 1000,
            fir: 1000,
            mike: 1000,
            sfax: 1000,
        },
    },
    fuelComputation: {
        vfrOps: {
            trip: {
                time: '00h48min',
                fuel: '240kg'
            },
            contingency: {
                fuel: '25kg'
            },
            reserve: {
                time: '00h30min',
                fuel: '130kg'
            },
            procedures: {
                time: '00h10min',
                fuel: '45kg'
            },
            extra: {
                fuel: '0kg'
            },
            total: {
                time: '01h28min',
                fuel: '440kg'
            }
        },
        ifrOps: {
            trip: {
                time: '00h52min',
                fuel: '240kg'
            },
            contingency: {
                fuel: '25kg'
            },
            alternate: {
                time: '00h21min',
                fuel: '105kg'
            },
            reserve: {
                time: '00h30min',
                fuel: '130kg'
            },
            procedures: {
                time: '00h20min',
                fuel: '90kg'
            },
            extra: {
                fuel: '0kg'
            },
            total: {
                time: '01h59min',
                fuel: '590kg'
            }
        }
    },
    landing_jba: {
        rw: '09/27',
        ldp: 50,
        v1: 75,
        vtoss: 75,
        freq: {
            datis: 124.525,
            twr: 118.15,
            app: 120.3,
            vor: 112.2,
            ils: 109.5
        },
        waypoint: {
            sfx: {
                mc: 173,
                dist: 51,
                ete: 21,
                con_fuel: 105,
                alt: 5000,
                msa: 3800
            }
        }
    }
};

export const HASDRUBAL_I = {
    tdp: 20,
    v1: 70,
    vtoss: 75,
    aircraft_type: 'AS 365 N3',
    aircraft_tail: 'TS-HSI',
    field: 'sfax airport',
    customer: 'SHELL',
    rig_ident: 'HASDRUBAL',
    position: 'N34°08’ - E011°36’',
    frequencies: {
        vhf_marine: 'CH08 (MISKAR)',
        hlo: 131.075,
        ndb: 390,
        app: 123.7,
        twr: 120.15,
        vor: 114.0,
    },
    WayPoints1: {
        mc: {
            mike: 125,
            fir: 125,
            hasdrubal: 125,
        },
        dist: {
            mike: 22,
            fir: 28,
            hasdrubal: 7,
        },
        ete: {
            sfax: 145,
            mike: 9,
            fir: 12,
            hasdrubal: 3,
        },
        con_fuel: {
            mike: 45,
            fir: 60,
            hasdrubal: 15,
        },
        r_fuel: {
            mike: 385,
            fir: 325,
            hasdrubal: 310,
        },
        alt: {
            mike: 2500,
            fir: 2500,
            hasdrubal: 2500,
        },
        msa: {
            mike: 1000,
            fir: 1000,
            hasdrubal: 1000,
        },
    },
    ldg_perfo: {
        ldp: 220,
        vi: 25,
    },
    weight: {
        oew: {
            to1: 3075,
            ldg1: 3075,
            to2: 3075,
            ldg2: 3075,
        },
        fuel: {
            to1: 440,
            to2: 280,
        },
    },
    WayPoints2: {
        mc: {
            hasdrubal: 305,
            fir: 305,
            mike: 305,
            sfax: 305,
        },
        dist: {
            hasdrubal: 7,
            fir: 28,
            mike: 22,
            sfax: 57,
        },
        ete: {
            hasdrubal: 3,
            fir: 12,
            mike: 9,
            sfax: 24,
        },
        con_fuel: {
            hasdrubal: 15,
            fir: 60,
            mike: 45,
            sfax: 120,
        },
        r_fuel: {
            hasdrubal: 265,
            fir: 205,
            mike: 160,
            sfax: 120,
        },
        alt: {
            hasdrubal: 2500,
            fir: 2500,
            mike: 2500,
            sfax: 2500,
        },
        msa: {
            hasdrubal: 1000,
            fir: 1000,
            mike: 1000,
            sfax: 1000,
        },
    },
    fuelComputation: {
        vfrOps: {
            trip: {
                time: '00h48min',
                fuel: '240kg',
            },
            contingency: {
                fuel: '25kg',
            },
            reserve: {
                time: '00h30min',
                fuel: '130kg',
            },
            procedures: {
                time: '00h10min',
                fuel: '45kg',
            },
            extra: {
                fuel: '0kg',
            },
            total: {
                time: '01h28min',
                fuel: '440kg',
            },
        },
        ifrOps: {
            trip: {
                time: '00h52min',
                fuel: '240kg',
            },
            contingency: {
                fuel: '25kg',
            },
            alternate: {
                time: '00h21min',
                fuel: '105kg',
            },
            reserve: {
                time: '00h30min',
                fuel: '130kg',
            },
            procedures: {
                time: '00h20min',
                fuel: '90kg',
            },
            extra: {
                fuel: '0kg',
            },
            total: {
                time: '01h59min',
                fuel: '590kg',
            },
        },
    },
    landing_jba: {
        rw: '09/27',
        ldp: 50,
        v1: 75,
        vtoss: 75,
        freq: {
            datis: 124.525,
            twr: 118.15,
            app: 120.3,
            vor: 112.2,
            ils: 109.5,
        },
        waypoint: {
            sfx: {
                mc: 173,
                dist: 51,
                ete: 21,
                con_fuel: 105,
                alt: 5000,
                msa: 3800,
            },
        },
    },
};

export const MISKAR_I = {
    tdp: 20,
    v1: 70,
    vtoss: 75,
    aircraft_type: 'AS 365 N3',
    aircraft_tail: 'TS-HSI',
    field: 'sfax airport',
    customer: 'SHELL',
    rig_ident: 'MISKAR',
    position: 'N34°22’ - E011°52’',
    frequencies: {
        vhf_marine: 'CH08 (MISKAR)',
        hlo: 131.075,
        ndb: 260,
        app: 123.7,
        twr: 120.15,
        vor: 114,
    },
    WayPoints1: {
        mc: {
            golf: 109,
            fir: 109,
            miskar: 109,
        },
        dist: {
            golf: 31,
            fir: 12,
            miskar: 19,
        },
        ete: {
            sfax: 145,
            golf: 13,
            fir: 5,
            miskar: 8,
        },
        con_fuel: {
            golf: 65,
            fir: 25,
            miskar: 40,
        },
        r_fuel: {
            sfax: 450,
            golf: 385,
            fir: 360,
            miskar: 320,
        },
        alt: {
            golf: 2500,
            fir: 2500,
            miskar: 2500,
        },
        msa: {
            golf: 1000,
            fir: 1000,
            miskar: 1000,
        },
    },
    ldg_perfo: {
        ldp: 220,
        vi: 25,
    },
    weight: {
        oew: {
            to1: 3075,
            ldg1: 3075,
            to2: 3075,
            ldg2: 3075,
        },
        fuel: {
            to1: 460,
            to2: 290,
        },
    },
    WayPoints2: {
        mc: {
            miskar: 289,
            fir: 289,
            golf: 289,
            sfax: 289,
        },
        dist: {
            miskar: 19,
            fir: 12,
            golf: 31,
            sfax: 62,
        },
        ete: {
            miskar: 8,
            fir: 5,
            golf: 13,
            sfax: 26,
        },
        con_fuel: {
            miskar: 40,
            fir: 25,
            golf: 65,
            sfax: 130,
        },
        r_fuel: {
            miskar: 250,
            fir: 225,
            golf: 160,
            sfax: 130,
        },
        alt: {
            miskar: 2500,
            fir: 2500,
            golf: 2500,
            sfax: 2500,
        },
        msa: {
            miskar: 1000,
            fir: 1000,
            golf: 1000,
            sfax: 1000,
        },
    },
    fuelComputation: {
        vfrOps: {
            trip: {
                time: '00h52min',
                fuel: '260kg',
            },
            contingency: {
                fuel: '25kg',
            },
            reserve: {
                time: '00h30min',
                fuel: '130kg',
            },
            procedures: {
                time: '00h10min',
                fuel: '45kg',
            },
            extra: {
                fuel: '0kg',
            },
            total: {
                time: '01h32min',
                fuel: '460kg',
            },
        },
        ifrOps: {
            trip: {
                time: '00h52min',
                fuel: '260kg',
            },
            contingency: {
                fuel: '25kg',
            },
            alternate: {
                time: '00h21min',
                fuel: '105kg',
            },
            reserve: {
                time: '00h30min',
                fuel: '130kg',
            },
            procedures: {
                time: '00h20min',
                fuel: '95kg',
            },
            extra: {
                fuel: '0kg',
            },
            total: {
                time: '02h03min',
                fuel: '610kg',
            },
        },
    },
    landing_jba: {
        rw: '09/27',
        ldp: 50,
        v1: 75,
        vtoss: 75,
        freq: {
            datis: 124.525,
            twr: 118.15,
            app: 120.3,
            vor: 112.2,
            ils: 109.5,
        },
        waypoint: {
            sfx: {
                mc: 173,
                dist: 51,
                ete: 21,
                con_fuel: 105,
                alt: 5000,
                msa: 3800,
            },
        },
    },
};

export const ASHTART_J = {
    tdp: 20,
    v1: 70,
    vtoss: 75,
    aircraft_type: 'AS 365 N3+',
    aircraft_tail: 'TS-HSJ',
    field: 'sfax aeroport',
    customer: 'SEREPT',
    rig_ident: 'ASHTART (4PILE)',
    position: 'N34°17,899 - E011°24,193',
    frequencies: {
        vhf_marine: 'CH09 (ASHTART)',
        hlo: 122.85,
        ndb: 347,
        app: 123.7,
        twr: 120.15,
        vor: 114,
    },
    WayPoints1: {
        mc: {
            m: 125,
            ashtart: 125
        },
        dist: {
            m: 22,
            ashtart: 22
        },
        ete: {
            sfx: 145,
            m: 9,
            ashtart: 9,
        },
        con_fuel: {
            sfx: 300,
            m: 45,
            ashtart: 45,
        },
        r_fuel: {
            sfx: 375,
            m: 330,
            ashtart: 285,
        },
        alt: {
            m: 1500,
            ashtart: 1500,
        },
        msa: {
            m: 1000,
            ashtart: 1000,
        },
    },
    ldg_perfo: {
        ldp: 220,
        vi: 25,
    },
    weight: {
        oew: {
            to1: 3045,
            ldg1: 3045,
            to2: 3045,
            ldg2: 3045,
        },
        fuel: {
            to1: 400,
            to2: 240
        }
    },
    WayPoints2: {
        mc: {
            ashtart: 305,
            m: 305,
            sfx: 305
        },
        dist: {
            ashtart: 22,
            m: 22,
            sfx: 22,
        },
        ete: {
            ashtart: 9,
            m: 9,
            sfx: 9,
        },
        con_fuel: {
            ashtart: 45,
            m: 45,
            sfx: 45,
        },
        r_fuel: {
            ashtart: 240,
            m: 195,
            sfx: 150,
        },
        alt: {
            ashtart: 1500,
            m: 1500,
            sfx: 1500,
        },
        msa: {
            ashtart: 1000,
            m: 1000,
            sfx: 1000,
        },
    },
    fuelComputation: {
        vfrOps: {
            trip: {
                time: '00h36min',
                fuel: '180kg',
            },
            contingency: {
                fuel: '20kg',
            },
            reserve: {
                time: '00h30min',
                fuel: '130kg',
            },
            procedures: {
                time: '00h10min',
                fuel: '45kg',
            },
            extra: {
                fuel: '0kg',
            },
            total: {
                time: '01h16min',
                fuel: '375kg',
            },
        },
        ifrOps: {
            trip: {
                time: '00h36min',
                fuel: '180kg',
            },
            contingency: {
                fuel: '20kg',
            },
            alternate: {
                time: '00h21min',
                fuel: '105kg',
            },
            reserve: {
                time: '00h30min',
                fuel: '130kg',
            },
            procedures: {
                time: '00h20min',
                fuel: '90kg',
            },
            extra: {
                fuel: '0kg',
            },
            total: {
                time: '01h47min',
                fuel: '525kg',
            },
        },
    },
    landing_jba: {
        rw: '09/27',
        ldp: 50,
        v1: 75,
        vtoss: 75,
        freq: {
            datis: 124.525,
            twr: 118.15,
            app: 120.3,
            vor: 112.2,
            ils: 109.5,
        },
        waypoint: {
            sfx: {
                mc: 173,
                dist: 51,
                ete: 21,
                con_fuel: 105,
                alt: 5000,
                msa: 3800,
            },
        },
    },
};

