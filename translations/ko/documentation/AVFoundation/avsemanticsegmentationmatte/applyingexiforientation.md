---
source_path: "documentation/AVFoundation/avsemanticsegmentationmatte/applyingexiforientation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/applyingexiforientation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applyingexiforientation:0000:0001">applyingExifOrientation(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyingexiforientation:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyingexiforientation:0002:0001">지정한 Exif 방향이 적용된 새 semantic segmentation matte 인스턴스를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyingexiforientation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingexiforientation:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func applyingExifOrientation(_ exifOrientation: CGImagePropertyOrientation) -> Self
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">새 semantic segmentation matte 인스턴스입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 인식할 수 없는 <code>exifOrientation</code>이 전달되면 <a href="https://developer.apple.com/documentation/Foundation/NSExceptionName/invalidArgumentException">@@TOKEN_1@@</a>를 발생시킵니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>exifOrientation</code>: 매트가 회전되거나 미러링되는 방식을 나타내는 <a href="https://developer.apple.com/documentation/ImageIO/CGImagePropertyOrientation">@@TOKEN_1@@</a> 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[convenience init(fromImageSourceAuxiliaryDataType: CFString, dictionaryRepresentation: [AnyHashable : Any]) throws](avsemanticsegmentationmatte/init(fromimagesourceauxiliarydatatype:dictionaryrepresentation:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이미지 파일의 보조 이미지 정보로부터 새 semantic segmentation matte 인스턴스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsemanticsegmentationmatte/replacingsemanticsegmentationmatte(with:">func replacingSemanticSegmentationMatte(with: CVPixelBuffer) throws -&gt; Self</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">교체할 pixel buffer를 래핑하는 semantic segmentation matte 인스턴스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[func dictionaryRepresentation(forAuxiliaryDataType: AutoreleasingUnsafeMutablePointer&lt;NSString?&gt;?) -&gt; [AnyHashable : Any]?](avsemanticsegmentationmatte/dictionaryrepresentation(forauxiliarydatatype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">semantic segmentation matte가 적용된 이미지 파일을 쓸 때 사용할 원시 맵 정보의 딕셔너리를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/applyingexiforientation(_:">View on Apple Developer</a>)*</span>
