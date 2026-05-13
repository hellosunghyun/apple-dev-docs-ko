---
source_path: "documentation/AppKit/nscompositingoperation/difference.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscompositingoperation/difference"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:nscompositingoperationdifference:0000:0001">NSCompositingOperation.difference</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nscompositingoperationdifference:0001:0001">**Framework**: AppKit **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nscompositingoperationdifference:0002:0001">더 밝은 값에서 더 어두운 값을 뺍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nscompositingoperationdifference:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:nscompositingoperationdifference:0004:0001">macOS 10.10+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case difference
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="nscompositingoperation/clear.md">NSCompositingOperation.clear</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">모든 위치가 투명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nscompositingoperation/copy.md">NSCompositingOperation.copy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">원본 이미지입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nscompositingoperation/sourceover.md">NSCompositingOperation.sourceOver</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">원본 이미지가 불투명한 위치는 원본 이미지를 사용하고, 나머지 위치는 대상 이미지를 사용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nscompositingoperation/sourcein.md">NSCompositingOperation.sourceIn</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">두 이미지가 모두 불투명한 곳에서는 원본 이미지를 사용하고, 나머지 위치는 투명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nscompositingoperation/sourceout.md">NSCompositingOperation.sourceOut</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">원본 이미지가 불투명하고 대상 이미지가 투명한 위치는 원본 이미지를 사용하며, 나머지는 투명입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nscompositingoperation/sourceatop.md">NSCompositingOperation.sourceAtop</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">두 이미지가 모두 불투명한 곳에서는 원본 이미지를 사용하고, 대상 이미지가 불투명하되 원본 이미지는 투명한 곳에서는 대상 이미지를 사용하며, 나머지 위치는 투명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nscompositingoperation/destinationover.md">NSCompositingOperation.destinationOver</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">대상 이미지가 불투명한 위치는 대상 이미지를 사용하고, 나머지 위치는 원본 이미지를 사용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nscompositingoperation/destinationin.md">NSCompositingOperation.destinationIn</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">두 이미지 모두 불투명한 위치는 대상 이미지를 사용하고, 나머지 위치는 투명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nscompositingoperation/destinationout.md">NSCompositingOperation.destinationOut</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">대상 이미지가 불투명하고 원본 이미지가 투명한 위치는 대상 이미지를 사용하며, 나머지는 투명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nscompositingoperation/destinationatop.md">NSCompositingOperation.destinationAtop</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">두 이미지 모두 불투명한 위치는 대상 이미지를 사용하고, 원본 이미지가 불투명하고 대상 이미지가 투명한 위치는 원본 이미지를 사용하며, 나머지는 투명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nscompositingoperation/xor.md">NSCompositingOperation.xor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">원본 이미지와 대상 이미지의 배타적 OR입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="nscompositingoperation/plusdarker.md">NSCompositingOperation.plusDarker</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">원본 이미지와 대상 이미지의 합으로, 색상 값이 0에 수렴합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="nscompositingoperation/pluslighter.md">NSCompositingOperation.plusLighter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">원본 이미지와 대상 이미지의 합으로, 색상 값이 1에 수렴합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="nscompositingoperation/multiply.md">NSCompositingOperation.multiply</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">원본 색상이 대상 색상과 곱해집니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="nscompositingoperation/screen.md">NSCompositingOperation.screen</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">대상 색상 값과 원본 색상 값의 보수를 곱한 다음 결과를 다시 보수 처리합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/appkit/nscompositingoperation/difference">View on Apple Developer</a>*</span>
