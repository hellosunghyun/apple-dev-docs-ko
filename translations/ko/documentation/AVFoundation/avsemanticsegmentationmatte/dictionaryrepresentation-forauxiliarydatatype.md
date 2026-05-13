---
source_path: "documentation/AVFoundation/avsemanticsegmentationmatte/dictionaryrepresentation-forauxiliarydatatype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/dictionaryrepresentation-forauxiliarydatatype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:dictionaryrepresentationforauxiliarydatatype:0000:0001">dictionaryRepresentation(forAuxiliaryDataType:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dictionaryrepresentationforauxiliarydatatype:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dictionaryrepresentationforauxiliarydatatype:0002:0001">Returns a dictionary of primitive map information to use when writing an image file with a semantic segmentation matte.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dictionaryrepresentationforauxiliarydatatype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:dictionaryrepresentationforauxiliarydatatype:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dictionaryrepresentationforauxiliarydatatype:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dictionaryrepresentationforauxiliarydatatype:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dictionaryrepresentationforauxiliarydatatype:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:dictionaryrepresentationforauxiliarydatatype:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dictionaryrepresentationforauxiliarydatatype:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dictionaryrepresentationforauxiliarydatatype:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func dictionaryRepresentation(forAuxiliaryDataType outAuxDataType: AutoreleasingUnsafeMutablePointer<NSString?>?) -> [AnyHashable : Any]?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A dictionary of <code>CGImageDestination</code>-compatible semantic segmentation matte information, or <code>nil</code> if the auxiliary data type is unsupported.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>outAuxDataType</code>: On output, the auxiliary data type to be used when calling the ImageIO framework’s <a href="https://developer.apple.com/documentation/ImageIO/CGImageDestinationAddAuxiliaryDataInfo(_:_:_:">@@TOKEN_1@@</a>) function. Currently supported auxiliary data types are enumerated in <code>CGImageProperties</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[convenience init(fromImageSourceAuxiliaryDataType: CFString, dictionaryRepresentation: [AnyHashable : Any]) throws](avsemanticsegmentationmatte/init(fromimagesourceauxiliarydatatype:dictionaryrepresentation:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Returns a new semantic segmentation matte instance from auxiliary image information in an image file.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avsemanticsegmentationmatte/replacingsemanticsegmentationmatte(with:">func replacingSemanticSegmentationMatte(with: CVPixelBuffer) throws -&gt; Self</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Returns a semantic segmentation matte instance that wraps the replacement pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsemanticsegmentationmatte/applyingexiforientation(_:">func applyingExifOrientation(CGImagePropertyOrientation) -&gt; Self</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns a new semantic segmentation matte instance with the specified Exif orientation applied.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정한 식별자를 포함하는 트랙의 원본 샘플 버퍼를 반환합니다.</span>
