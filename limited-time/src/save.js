import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save() {
	const blockProps = useBlockProps.save({ className: "limited-time" });

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
