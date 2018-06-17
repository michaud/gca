import React from 'react';

export default class HoleNavigatorComponent extends React.Component {

    state = {
        currentHoleIndex: -1
    }

    render () {

        const { holes } = this.props;

        return holes && holes.length > 0 ? <div>
            <div className="game-nav">
                <button className="btn--action game-nav__btn"><span>&lt;</span></button>
                <button className="game-nav__select-hole">
                    <div className="select-hole__hole-label">hole 1, 500m, dogleg right</div>
                    <div className="select-hole__details-container">
                        <table className="select-hole__info">
                            <tbody>
                                <tr>
                                    <td className="hole-info__par">par</td>
                                    <td className="hole-info__par-value">2</td>
                                </tr>
                                <tr>
                                    <td className="hole-info__si">SI</td>
                                    <td className="hole-info__si-value">1</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="select-hole__score">
                            <tbody>
                                <tr>
                                    <td className="score__strokes">strokes</td>
                                    <td className="score__strokes-value">99</td>
                                </tr>
                                <tr>
                                    <td className="score__points">points</td>
                                    <td className="score__points-value">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="select-hole__btn-toggle">v</div>
                </button>
                <button className="btn--action game-nav__btn"><span>&gt;</span></button>
            </div>
            <ol className="plain-list hole-list" style={{ display: 'none' }}>
                { holes.map((hole, idx) => <li key={ idx }><button className="btn--play">
                    <div className="select-hole__label">{ hole.name }</div>
                    <div className="select-hole__description">{ hole.name }</div>
                    <div className="select-hole__details-container">
                        <table className="select-hole__info small">
                            <tbody>
                                <tr>
                                    <td className="hole-info__par">par</td>
                                    <td className="hole-info__par-value">2</td>
                                </tr>
                                <tr>
                                    <td className="hole-info__si">SI</td>
                                    <td className="hole-info__si-value">1</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="select-hole__score small">
                            <tbody>
                                <tr>
                                    <td className="score__strokes">strokes</td>
                                    <td className="score__strokes-value">99</td>
                                </tr>
                                <tr>
                                    <td className="score__points">points</td>
                                    <td className="score__points-value">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </button></li>) }
            </ol>
        </div>
        : null;
    }
}
