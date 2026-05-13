---
source_path: "documentation/Accelerate/bnnsndarraydescriptor/init-datashape.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/init-datashape"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initdatashape:0000:0001">init(data:shape:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdatashape:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdatashape:0002:0001">Returns a new n-dimensional array descriptor that references the same data as the specified pointer.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdatashape:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initdatashape:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdatashape:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdatashape:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdatashape:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdatashape:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdatashape:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdatashape:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init?<T>(data: UnsafeMutableBufferPointer<T>, shape: BNNS.Shape) where T : BNNSScalar
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>data</code>: A pointer to the underlying data.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>shape</code>: The shape of the n-dimensional array descriptor.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsndarraydescriptor/init(flags:layout:size:stride:data:data_type:table_data:table_data_type:data_scale:data_bias:">init(flags: BNNSNDArrayFlags, layout: BNNSDataLayout, size: (Int, Int, Int, Int, Int, Int, Int, Int), stride: (Int, Int, Int, Int, Int, Int, Int, Int), data: UnsafeMutableRawPointer?, data_type: BNNSDataType, table_data: UnsafeMutableRawPointer?, table_data_type: BNNSDataType, data_scale: Float, data_bias: Float)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Returns a new n-dimensional array descriptor with the specified parameters.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsndarraydescriptor/init(data:scalartype:shape:">init?(data: UnsafeMutableRawBufferPointer, scalarType: any BNNSScalar.Type, shape: BNNS.Shape)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">사진 렌더 파이프라인이 콘텐츠 인식 왜곡 보정을 수행할 수 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var format: [String : Any]?](avcapturephotosettings/format.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">캡처 출력이 브래킷 이미지 캡처 동안 렌즈 안정화를 현재 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsndarraydescriptor/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">단일 브래킷 캡처에서 캡처 출력이 지원할 수 있는 최대 이미지 수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/init(data:shape:">View on Apple Developer</a>)*</span>
