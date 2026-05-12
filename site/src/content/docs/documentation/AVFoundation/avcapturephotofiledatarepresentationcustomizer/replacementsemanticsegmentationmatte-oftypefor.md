---
source_path: "documentation/AVFoundation/avcapturephotofiledatarepresentationcustomizer/replacementsemanticsegmentationmatte-oftypefor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/replacementsemanticsegmentationmatte-oftypefor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:replacementsemanticsegmentationmatteoftypefor:0000:0001">replacementSemanticSegmentationMatte(ofType:for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:replacementsemanticsegmentationmatteoftypefor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:replacementsemanticsegmentationmatteoftypefor:0002:0001">평면화된 파일 데이터 표현에서 지정한 유형의 semantic segmentation matte를 교체하거나 제거합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:replacementsemanticsegmentationmatteoftypefor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:replacementsemanticsegmentationmatteoftypefor:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:replacementsemanticsegmentationmatteoftypefor:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:replacementsemanticsegmentationmatteoftypefor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:replacementsemanticsegmentationmatteoftypefor:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func replacementSemanticSegmentationMatte(ofType semanticSegmentationMatteType: AVSemanticSegmentationMatte.MatteType, for photo: AVCapturePhoto) -> AVSemanticSegmentationMatte?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">반환 값은 <a href="avsemanticsegmentationmatte.md">@@TOKEN_0@@</a> 인스턴스입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">기존 matte를 유지하려면 <code>photo.</code>`<code>AVCapturePhoto/semanticSegmentationMatte(for:)</code><code>.</code>를 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0003">기존 항목을 제거하려면 <code>nil</code>을 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0004">교체하려면 대체 <a href="avsemanticsegmentationmatte.md">@@TOKEN_0@@</a> 인스턴스를 제공합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 콜백은 선택 사항입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">대리자가 이 콜백을 구현하지 않으면, 지정한 유형의 기존 semantic segmentation matte가 메모리 내 <a href="avcapturephoto.md">@@TOKEN_0@@</a> 컨테이너에서 파일 데이터 표현으로 기록됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>semanticSegmentationMatteType</code>: 교체되거나 제거될 semantic segmentation matte의 유형입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>photo</code>: <a href="avcapturephoto.md">@@TOKEN_1@@</a>의 호출 인스턴스입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func replacementMetadata(for: AVCapturePhoto) -&gt; [String : Any]?](avmetadataidentifier/id3metadataaudioencryption.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">대체 메타데이터를 제공하거나 평면화된 파일에서 기존 메타데이터를 제거하도록 <a href="avcapturephoto.md">@@TOKEN_0@@</a>를 지시할 수 있는 콜백입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/id3metadataaudioseekpointindex.md">func replacementEmbeddedThumbnailPixelBuffer(withPhotoFormat: AutoreleasingUnsafeMutablePointer&lt;NSDictionary?&gt;, for: AVCapturePhoto) -&gt; Unmanaged&lt;CVPixelBuffer&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">압축 설정이 포함된 대체 임베디드 썸네일 이미지를 제공하거나, 평면화된 파일에서 기존 임베디드 썸네일 이미지를 제거할 수 있는 콜백입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/id3metadataband.md">func replacementDepthData(for: AVCapturePhoto) -&gt; AVDepthData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">파일에서 대체 depth data를 제공하거나 기존 depth data를 제거할 수 있는 콜백입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/id3metadatabeatsperminute.md">func replacementPortraitEffectsMatte(for: AVCapturePhoto) -&gt; AVPortraitEffectsMatte?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">파일에서 대체 portrait effects matte를 제공하거나 기존 portrait effects matte를 제거할 수 있는 콜백입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[func replacementAppleProRAWCompressionSettings(for: AVCapturePhoto, defaultSettings: [String : Any], maximumBitDepth: Int) -&gt; [String : Any]](avmetadataidentifier/id3metadatacomments.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">시스템이 Apple ProRAW 데이터를 Linear DNG 파일로 기록할 때 사용하는 압축 설정을 교체합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/replacementsemanticsegmentationmatte(oftype:for:">Apple Developer에서 보기</a>)*</span>
