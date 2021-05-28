import { h } from "preact";
import { useContext, useEffect } from "preact/hooks";
import { FiboContext } from "providers/fibo";
import "./OutputPanel.scss";

export default () => {
    const { result } = useContext(FiboContext);

    useEffect(() => {
        console.log("output panel", result);
    }, [result]);

    if (result === undefined) return null;
    if (!result.success) return null;

    return (
        <table class="output">
            <tr class="row header" key={"headline"}>
                <td class="index">n</td>
                <td class="value">a(n)</td>
            </tr>
            {result.values.map((value, idx) => (
                <tr class="row" key={idx + value}>
                    <td class="index">{idx.toString()}</td>
                    <td class="value">{value}</td>
                </tr>
            ))}
        </table>
    );
};
