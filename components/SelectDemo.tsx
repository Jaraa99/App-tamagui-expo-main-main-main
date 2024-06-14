import React, { useState } from "react";
import { Check, ChevronDown } from "@tamagui/lucide-icons";
import { Fieldset, Label, Select, Sheet } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

interface Dinosaur {
  name: string;
}

const SelectDemo: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Tyrannosaurus Rex");

  const items: Dinosaur[] = [
    { name: "Tyrannosaurus Rex" },
    { name: "Triceratops" },
    { name: "Velociraptor" },
    { name: "Stegosaurus" },
    { name: "Brachiosaurus" },
    { name: "Spinosaurus" },
    { name: "Ankylosaurus" },
    { name: "Pteranodon" },
    { name: "Apatosaurus" },
    { name: "Dilophosaurus" },
    { name: "Gallimimus" },
    { name: "Compsognathus" },
    { name: "Parasaurolophus" },
    { name: "Allosaurus" },
    { name: "Iguanodon" },
    { name: "Mosasaurus" },
    { name: "Carnotaurus" },
    { name: "Pachycephalosaurus" },
    { name: "Diplodocus" },
    { name: "Archaeopteryx" }
  ];

  return (
    <Fieldset>
      <Label htmlFor="dinosaur">Select a Dinosaur</Label>
      <Select id="dinosaur" value={selectedItem} onValueChange={setSelectedItem}>
        <Select.Trigger iconAfter={ChevronDown}>
          <Select.Value>{selectedItem}</Select.Value>
        </Select.Trigger>

        <Sheet modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Fieldset>
                {items.map((item) => (
                  <Select.Item
                    key={item.name}
                    value={item.name}
                    onPress={() => setSelectedItem(item.name)}
                  >
                    {item.name}
                    {selectedItem === item.name && <Check size={16} />}
                  </Select.Item>
                ))}
              </Fieldset>
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Select>
    </Fieldset>
  );
};

export default SelectDemo;

