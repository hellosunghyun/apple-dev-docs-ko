---
source_path: "documentation/AVFoundation/avassetexportsession/allexportpresets.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetexportsession/allexportpresets"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:allexportpresets:0000:0001">allExportPresets()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allexportpresets:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allexportpresets:0002:0001">사용 가능한 모든 내보내기 프리셋 이름을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allexportpresets:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:allexportpresets:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allexportpresets:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allexportpresets:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:allexportpresets:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:allexportpresets:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allexportpresets:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func allExportPresets() -> [String]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">에셋 내보내기 세션이 지원하는 값은 <a href="export-presets.md">@@TOKEN_0@@</a>에서 확인합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">모든 프리셋이 모든 에셋과 호환되는 것은 아닙니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetexportsession/presetname.md">var presetName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">에셋 내보내기 세션이 사용하는 프리셋의 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func determineCompatibleFileTypes(completionHandler: ([AVFileType]) -&gt; Void)](avasynchronousvideocompositionrequest/sourcereadonlypixelbuffer(bytrackid:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">에셋 내보내기 세션이 현재 구성에서 작성할 수 있는 출력 파일 형식을 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetwriter/inputcaptionreceiverrequestingmultipass(for:">class func determineCompatibility(ofExportPreset: String, with: AVAsset, outputFileType: AVFileType?, completionHandler: (Bool) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">출력 파일 형식의 컨테이너에서 에셋을 내보낼 수 있는지에 대한 export preset의 호환성을 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[class func exportPresets(compatibleWith: AVAsset) -&gt; [String]](avassetwriter/inputmetadatareceiver(for:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">에셋에 대해 호환되는 내보내기 프리셋을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetexportsession/allexportpresets(">View on Apple Developer</a>)*</span>
