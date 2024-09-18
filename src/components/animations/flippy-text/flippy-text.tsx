import styles from "./flippy-text.module.css";
import React from "react";
import {motion} from "framer-motion";

type Props = {
    text: string;
    inlineStyles?: React.CSSProperties;
    direction: "up" | "down";
    postText?: string;
    postInlineStyles?: React.CSSProperties;
    preText?: string;
    preInlineStyles?: React.CSSProperties;
    duration?: number;
    delay?: number;
}

export default function FlippyText({inlineStyles, direction, text, preText, preInlineStyles, postText, postInlineStyles, duration = 0.2, delay = 0.02}: Props) {
    return <motion.span style={inlineStyles} className={styles.container}>
        <div className={styles.text_wrapper}>
            {preText && <span style={preInlineStyles}>{preText}</span>}

            {
                text.split("").map((item, index) => {
                    return <motion.span
                        className={`${styles.character} ${item === " " && styles.empty_character}`}
                        key={index}
                        variants={{
                            initial: {y: direction === "up" ? 0 : "-100%"},
                            animate: {y: direction === "up" ? "-100%" : 0}
                        }}
                        transition={{
                            duration,
                            delay: index * delay,
                            ease: "easeInOut",
                        }}
                    >
                        {item}
                    </motion.span>
                })
            }

            {postText && <span style={postInlineStyles}>{postText}</span>}
        </div>

        <div className={styles.text_wrapper_copy}>
            {preText && <span style={preInlineStyles}>{preText}</span>}

            {
                text.split("").map((item, index) => {
                    return <motion.span
                        className={`${styles.character} ${item === " " && styles.empty_character}`}
                        key={index}
                        variants={{
                            initial: {y: direction === "up" ? "100%" : 0},
                            animate: {y: direction === "up" ? 0 : "100%"}
                        }}
                        transition={{
                            duration,
                            delay: index * delay,
                            ease: "easeInOut",
                        }}
                    >
                        {item}
                    </motion.span>
                })
            }

            {postText && <span style={postInlineStyles}>{postText}</span>}
        </div>
    </motion.span>
}
