---
source_path: "documentation/AVFoundation/avdepthdata/init-fromdictionaryrepresentation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avdepthdata/init-fromdictionaryrepresentation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initfromdictionaryrepresentation:0000:0001">init(fromDictionaryRepresentation:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfromdictionaryrepresentation:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfromdictionaryrepresentation:0002:0001">이미지 파일에 포함된 깊이 정보 등에서 깊이 데이터 객체를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfromdictionaryrepresentation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initfromdictionaryrepresentation:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromdictionaryrepresentation:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromdictionaryrepresentation:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromdictionaryrepresentation:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromdictionaryrepresentation:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromdictionaryrepresentation:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init(fromDictionaryRepresentation imageSourceAuxDataInfoDictionary: [AnyHashable : Any]) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="creating-auxiliary-depth-data-manually.md">Creating auxiliary depth data manually</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>CGImageSource</code> 함수를 사용해 깊이 데이터(및 이미지 데이터)가 포함된 HEIF, JPEG 또는 DNG 파일에서 읽을 때, <a href="https://developer.apple.com/documentation/ImageIO/CGImageSourceCopyAuxiliaryDataInfoAtIndex(_:_:_:">@@TOKEN_1@@</a>) 함수를 통해 원시 깊이 맵 정보를 로드한 뒤, 아래와 같이 이 초기화 메서드를 사용해 <a href="avdepthdata.md">@@TOKEN_2@@</a> 객체를 생성할 수 있습니다.</span>

```swift
- (nullable AVDepthData *)depthDataFromImageData:(nonnull NSData *)imageData {
	AVDepthData *depthData = nil;

    CGImageSourceRef imageSource = CGImageSourceCreateWithData((CFDataRef)imageData, NULL);
	if (imageSource) {
		NSDictionary *auxDataDictionary = (__bridge NSDictionary *)CGImageSourceCopyAuxiliaryDataInfoAtIndex(imageSource, 0, kCGImageAuxiliaryDataTypeDisparity);
		if (auxDataDictionary) {
			depthData = [AVDepthData depthDataFromDictionaryRepresentation:auxDataDictionary error:NULL];
		}

		CFRelease(imageSource);
	}

    return depthData;
}
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>imageSourceAuxDataInfoDictionary</code>: <a href="https://developer.apple.com/documentation/ImageIO/CGImageSourceCopyAuxiliaryDataInfoAtIndex(_:_:_:">@@TOKEN_1@@</a>) 함수가 제공하는 형식의 원시 깊이 관련 정보 사전입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[func dictionaryRepresentation(forAuxiliaryDataType: AutoreleasingUnsafeMutablePointer&lt;NSString?&gt;?) -&gt; [AnyHashable : Any]?](avdepthdata/dictionaryrepresentation(forauxiliarydatatype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">이미지 파일에 쓰기에 적합한 깊이 데이터의 사전 표현을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avdepthdata/init(fromdictionaryrepresentation:">View on Apple Developer</a>)*</span>
