"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomGadgetTreeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomCommonNodeInfo_1 = require("./CustomCommonNodeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class CustomGadgetTreeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomGadgetTreeInfo", [
            { no: 1, name: "node_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomCommonNodeInfo_1.CustomCommonNodeInfo }
        ]);
    }
    create(value) {
        const message = { nodeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated CustomCommonNodeInfo node_list */ 1:
                    message.nodeList.push(CustomCommonNodeInfo_1.CustomCommonNodeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated CustomCommonNodeInfo node_list = 1; */
        for (let i = 0; i < message.nodeList.length; i++)
            CustomCommonNodeInfo_1.CustomCommonNodeInfo.internalBinaryWrite(message.nodeList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomGadgetTreeInfo
 */
exports.CustomGadgetTreeInfo = new CustomGadgetTreeInfo$Type();
