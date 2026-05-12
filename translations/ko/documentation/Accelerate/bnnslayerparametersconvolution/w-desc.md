---
source_path: "documentation/Accelerate/bnnslayerparametersconvolution/w-desc.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparametersconvolution/w-desc"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:wdesc:0000:0001">w_desc</span>

<span class="ko-segment" data-segment-id="seg:paragraph:wdesc:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:wdesc:0002:0001">가중치의 디스크립터입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:wdesc:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:wdesc:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:wdesc:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:wdesc:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:wdesc:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:wdesc:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:wdesc:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:wdesc:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var w_desc: BNNSNDArrayDescriptor
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparametersconvolution/i_desc.md">var i_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">입력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparametersconvolution/o_desc.md">var o_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparametersnormalization/init(">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparametersconvolution/bias.md">var bias: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">바이어스의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparametersconvolution/activation.md">var activation: BNNSActivation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">계층이 출력에 적용하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparametersconvolution/x_stride.md">var x_stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">입력 이미지의 가로 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslayerparametersconvolution/y_stride.md">var y_stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">입력 이미지의 세로 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslayerparametersconvolution/x_dilation_stride.md">var x_dilation_stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">컨볼루션 중 입력 이미지의 요소 간 가로 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparametersconvolution/y_dilation_stride.md">var y_dilation_stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">컨볼루션 중 입력 이미지의 요소 간 세로 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnslayerparametersconvolution/x_padding.md">var x_padding: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">각 채널의 왼쪽과 오른쪽에 추가되는 가상 0의 개수로, 너비 패딩입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnslayerparametersconvolution/y_padding.md">var y_padding: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">각 채널의 위쪽과 아래쪽에 추가되는 가상 0의 개수로, 높이 패딩입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnslayerparametersconvolution/groups.md">var groups: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">컨볼루션 그룹 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnslayerparametersconvolution/pad.md">var pad: (Int, Int, Int, Int)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">너비 또는 높이 패딩 값이 0보다 클 때 무시되는 비대칭 패딩입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparametersconvolution/w_desc">View on Apple Developer</a>*</span>
