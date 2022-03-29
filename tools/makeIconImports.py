import os

jig = "import {{ ReactComponent as {0} }} from '{1}/{2}'"
exports = []
icons = []
keys = []

print("import CaptionedIcon from \"./CaptionedIcon\";")

for basedir, _, files in os.walk("./icons"):
    for file in files:
        basename, extn = file.split(".", maxsplit=2)
        keys.append(basename)
        if extn == "png" or file == ".DS_Store":
            continue
        component_name = "".join([word[0].upper() + word[1:] for word in basename.split("-")[1:]])
        icon_name = "Icon" + component_name
        exports.append(component_name)
        icons.append(icon_name)
        print(f"""
const {component_name} = () => {{
    return (
        <span>
            <img src='icons/{file}' className='captionedIcon' alt='{component_name}' /> {component_name}
        </span>
    )
}}""")

print("\niconTable = {")
[print("\t{0}: <{1} />,".format(export, export))  for export in exports]
print("};")

print("\nmodule.exports = {")
print("\ticonTable,")
[print("\t{0},".format(export)) for export in exports]
print("};")
