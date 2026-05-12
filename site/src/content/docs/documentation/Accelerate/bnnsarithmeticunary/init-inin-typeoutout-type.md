---
source_path: "documentation/Accelerate/bnnsarithmeticunary/init-inin-typeoutout-type.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsarithmeticunary/init-inin-typeoutout-type"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initinintypeoutouttype:0000:0001">init(in:in_type:out:out_type:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initinintypeoutouttype:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initinintypeoutouttype:0002:0001">지정된 매개변수에서 단일 입력을 받는 새 산술 구조를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initinintypeoutouttype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initinintypeoutouttype:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinintypeoutouttype:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinintypeoutouttype:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinintypeoutouttype:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinintypeoutouttype:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinintypeoutouttype:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinintypeoutouttype:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(in: BNNSNDArrayDescriptor, in_type: BNNSDescriptorType, out: BNNSNDArrayDescriptor, out_type: BNNSDescriptorType)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">❗ **중요**: 입력 데이터 타입은 출력 데이터 타입과 같아야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0002">입력 크기는 출력 크기와 같거나 <code>1</code>이어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0003">산술 레이어는 데이터 타입이 <code>float</code>인 배열과 <a href="bnns/datalayout/vector.md">@@TOKEN_1@@</a>, <a href="bnns/datalayout/matrixrowmajor.md">@@TOKEN_2@@</a>, <a href="bnns/datalayout/matrixcolumnmajor.md">@@TOKEN_3@@</a>, <a href="bnns/datalayout/imagechw.md">@@TOKEN_4@@</a> 데이터 레이아웃을 가진 배열만 지원합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>in</code>: 입력의 descriptor입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>kernelSize</code>: The size of the pooling kernel.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>strides</code>: An array that contains the kernel stride for each spatial dimension.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>padding</code>: An enumeration that specifies that the operation computes the padding from the input and output shapes. If you specify <code>custom</code>, pass twice the number of spatial dimensions.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsarithmeticunary/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">단일 입력을 받는 새 산술 구조를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsarithmeticunary/init(in:in_type:out:out_type:">View on Apple Developer</a>)*</span>
