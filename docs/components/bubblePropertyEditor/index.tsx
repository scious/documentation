 import React, {type CSSProperties, type ReactNode} from 'react';
 
 import styles from './styles.module.css';
 
 interface Props {
   children: ReactNode;
 }
 
 export default function BubblePropertyEditor({
   children,
	 searchProvider,
	 title,
 }: Props): JSX.Element {
   return (
    <figure style={{ display: 'flex', justifyContent: 'center', padding: 16}}>
    <div id={styles.DIV_1}>
		<div id={styles.DIV_2}>
			<div id={styles.DIV_4}>
				{title}
			</div>
		</div>
		<div id={styles.DIV_20}>
			<div id={styles.DIV_21}>
				Appearance
			</div>
			<div id={styles.DIV_22}>
				Layout
			</div>
			<div id={styles.DIV_23}>
				Conditional
			</div>
		</div>
		<div id={styles.DIV_24}>
			<div id={styles.DIV_26}>
				<div id={styles.DIV_27}>
					<div id={styles.DIV_28}>
						<div id={styles.DIV_29}>
							Search provider
						</div>
						<div id={styles.DIV_30}>
							<div id={styles.DIV_31}>
								<div id={styles.DIV_32}>
									<div id={styles.DIV_33}>
										{searchProvider}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id={styles.DIV_74}>
					<div id={styles.DIV_75}>
						<div id={styles.DIV_76}>
							Filters
						</div>
						<div className={styles.prismOverride}>
              {children}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </figure>
   );
 }
