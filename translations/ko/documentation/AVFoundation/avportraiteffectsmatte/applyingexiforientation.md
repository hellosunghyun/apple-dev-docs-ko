---
source_path: "documentation/AVFoundation/avportraiteffectsmatte/applyingexiforientation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/applyingexiforientation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applyingexiforientation:0000:0001">applyingExifOrientation(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyingexiforientation:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyingexiforientation:0002:0001">지정된 EXIF 방향을 적용한 뒤 파생된 portrait effects matte를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyingexiforientation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0005">tvOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0007">watchOS 5.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func applyingExifOrientation(_ exifOrientation: CGImagePropertyOrientation) -> Self
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>exifOrientation</code>: portrait effects matte를 회전하거나 반전할 방법을 나타내는 표준 EXIF 방향 태그 중 하나입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="configuring-camera-capture-to-collect-a-portrait-effects-matte.md">Configuring camera capture to collect a Portrait Effects matte</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">사진 촬영 시 portrait effects matte를 캡처하도록 앱을 준비합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[convenience init(fromDictionaryRepresentation: [AnyHashable : Any]) throws](avvideocompositionlayerinstruction/croprectangleramp(at:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이미지 파일의 보조 이미지 정보에서 portrait effects matte 인스턴스를 초기화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avportraiteffectsmatte/replacingportraiteffectsmatte(with:">func replacingPortraitEffectsMatte(with: CVPixelBuffer) throws -&gt; Self</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">교체 pixel buffer를 래핑하여 portrait effects matte를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/applyingexiforientation(_:">View on Apple Developer</a>)*</span>
