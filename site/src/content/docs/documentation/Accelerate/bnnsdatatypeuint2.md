---
source_path: "documentation/Accelerate/bnnsdatatypeuint2.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsdatatypeuint2"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsdatatypeuint2:0000:0001">BNNSDataTypeUInt2</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatatypeuint2:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatatypeuint2:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeuint2:0003:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeuint2:0003:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeuint2:0003:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeuint2:0003:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeuint2:0003:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeuint2:0003:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeuint2:0003:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
var BNNSDataTypeUInt2: BNNSDataType { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0006:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0007:0001">Storage data type</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Common bit to floating point types, this constant is not a valid type</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">16-bit half precision floating point</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">캡처를 요청할 때 사진 설정의 <a href="avcapturephotosettings/previewphotoformat.md">@@TOKEN_0@@</a> 속성을 지정해 미리보기 이미지를 요청했다면, 이 property를 통해 결과 미리보기 이미지의 픽셀 데이터에 접근할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">16-bit brain floating Point</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">Common bit to signed integer types, this constant is not a valid type</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">8-bit signed integer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">16-bit signed integer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">32-bit signed integer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0016:0001">64-bit signed integer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0017:0001">Common bit to unsigned integer types, this constant is not a valid type</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0018:0001">8-bit unsigned integer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0019:0001">16-bit unsigned integer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0020:0001">32-bit unsigned integer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0021:0001">64-bit unsigned integer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0022:0001">Common bit to indexed floating point types, this constant is not a valid type</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0023:0001">2-bit unsigned indices into a floating point conversion table (4 values)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0024:0001">4-bit unsigned indices into a floating point conversion table (16 values)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0025:0001">8-bit unsigned indices into a floating point conversion table (256 values)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0026:0001">Common bit to miscellaneous types, this constant is not a valid type</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0027:0001">bool value</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0028:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnsdatatypebfloat16.md">var BNNSDataTypeBFloat16: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0002"><a href="bnnsdatatypeboolean.md">var BNNSDataTypeBoolean: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0003"><a href="bnnsdatatypeindexed1.md">var BNNSDataTypeIndexed1: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0004"><a href="bnnsdatatypeindexed2.md">var BNNSDataTypeIndexed2: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0005"><a href="bnnsdatatypeindexed4.md">var BNNSDataTypeIndexed4: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0006"><a href="bnnsdatatypeint1.md">var BNNSDataTypeInt1: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0007"><a href="bnnsdatatypeint2.md">var BNNSDataTypeInt2: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0008"><a href="bnnsdatatypeint4.md">var BNNSDataTypeInt4: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0009"><a href="bnnsdatatypeint64.md">var BNNSDataTypeInt64: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0010"><a href="bnnsdatatypemiscellaneousbit.md">var BNNSDataTypeMiscellaneousBit: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0011"><a href="bnnsdatatypeuint1.md">var BNNSDataTypeUInt1: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0012"><a href="bnnsdatatypeuint3.md">var BNNSDataTypeUInt3: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0013"><a href="bnnsdatatypeuint4.md">var BNNSDataTypeUInt4: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0014"><a href="bnnsdatatypeuint6.md">var BNNSDataTypeUInt6: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0015"><a href="bnnsdatatypeuint64.md">var BNNSDataTypeUInt64: BNNSDataType</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsdatatypeuint2">View on Apple Developer</a>*</span>
