---
source_path: "documentation/Accelerate/bnnslayerparameterspooling/pad.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterspooling/pad"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:pad:0000:0001">pad</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pad:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pad:0002:0001">비대칭 패딩입니다. <code>x_padding</code> 또는 <code>y_padding</code>이 0보다 큰 경우 무시됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pad:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:pad:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pad:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pad:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pad:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pad:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pad:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pad:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var pad: (Int, Int, Int, Int)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparameterspooling/i_desc.md">var i_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">입력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparameterspooling/o_desc.md">var o_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">출력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparameterspooling/bias.md">var bias: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">bias의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparameterspooling/activation.md">var activation: BNNSActivation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">레이어가 출력에 적용하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparameterspooling/pooling_function.md">var pooling_function: BNNSPoolingFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">풀링 함수를 지정하는 변수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslayerparameterspooling/k_width.md">var k_width: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">커널의 너비입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslayerparameterspooling/k_height.md">var k_height: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">커널의 높이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparameterspooling/x_stride.md">var x_stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력 이미지의 가로 간격 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnslayerparameterspooling/y_stride.md">var y_stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입력 이미지의 세로 간격 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnslayerparameterspooling/x_dilation_stride.md">var x_dilation_stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">컨볼루션 중 입력 이미지에서 요소 간 가로 간격 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnslayerparameterspooling/y_dilation_stride.md">var y_dilation_stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">컨볼루션 중 입력 이미지에서 요소 간 세로 간격 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnslayerparameterspooling/x_padding.md">var x_padding: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">각 채널의 좌우에 추가되는 가상 0의 개수인 가로 패딩입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnslayerparameterspooling/y_padding.md">var y_padding: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">각 채널의 상단과 하단에 추가되는 가상 0의 개수인 세로 패딩입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterspooling/pad">View on Apple Developer</a>*</span>
