---
source_path: "documentation/Accelerate/bnnspoolinglayerparameters/pooling-function.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnspoolinglayerparameters/pooling-function"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:poolingfunction:0000:0001">pooling_function</span>

<span class="ko-segment" data-segment-id="seg:paragraph:poolingfunction:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:poolingfunction:0002:0001">The pooling function to apply to each sample.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:poolingfunction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:poolingfunction:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingfunction:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingfunction:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingfunction:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingfunction:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingfunction:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingfunction:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var pooling_function: BNNSPoolingFunction
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnspoolinglayerparameters/activation.md">var activation: BNNSActivation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">미디어 데이터의 복호화 키를 생성하고 추적하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnspoolinglayerparameters/bias.md">var bias: BNNSLayerData</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">요청된 시간에 대한 이미지입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnspoolinglayerparameters/in_channels.md">var in_channels: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The number of input channels.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnspoolinglayerparameters/k_height.md">var k_height: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The height of the convolution kernel.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnspoolinglayerparameters/k_width.md">var k_width: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The width of the convolution kernel.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnspoolinglayerparameters/out_channels.md">var out_channels: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The number of output channels.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnspoolinglayerparameters/x_padding.md">var x_padding: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The X padding.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnspoolinglayerparameters/x_stride.md">var x_stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The X increment in the input image.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnspoolinglayerparameters/y_padding.md">var y_padding: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">The Y padding.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnspoolinglayerparameters/y_stride.md">var y_stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The Y increment in the input image.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnspoolinglayerparameters/pooling_function">View on Apple Developer</a>*</span>
