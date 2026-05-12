---
source_path: "documentation/AVFoundation/avassetexportsession.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetexportsession"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetexportsession:0000:0001">AVAssetExportSession</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetexportsession:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetexportsession:0002:0001">내보내기 프리셋을 사용해 지정한 형식으로 자산을 내보내는 개체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetexportsession:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetexportsession:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetexportsession:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetexportsession:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetexportsession:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetexportsession:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetexportsession:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetExportSession
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="exporting-video-to-alternative-formats.md">Exporting video to alternative formats</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0009:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">이 개체는 내보내기 프리셋, 출력 파일 형식 및 출력 URL을 설정하여 <a href="avasset.md">@@TOKEN_0@@</a> 인스턴스를 내보내도록 구성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-export-session:0012:0001">내보내기 세션 만들기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-export-session:0013:0001"><a href="avassetexportsession/init(asset:presetname:">init?(asset: AVAsset, presetName: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-export-session:0014:0001">프리셋 구성으로 내보내기 세션을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-export-session:0015:0001"><a href="export-presets.md">Export presets</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-export-session:0016:0001">내보내기 세션을 구성하여 표준 크기 및 형식으로 미디어를 출력합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-export-presets:0017:0001">내보내기 프리셋 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-export-presets:0018:0001"><a href="avassetexportsession/presetname.md">var presetName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-export-presets:0019:0001">자산 내보내기 세션에서 사용하는 프리셋의 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-export-presets:0020:0001">[func determineCompatibleFileTypes(completionHandler: ([AVFileType]) -&gt; Void)](avassetexportsession/determinecompatiblefiletypes(completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-export-presets:0021:0001">자산 내보내기 세션이 현재 구성에서 쓸 수 있는 출력 파일 형식을 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-export-presets:0022:0001">[class func allExportPresets() -&gt; [String]](avassetexportsession/allexportpresets.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-export-presets:0023:0001">자산을 출력 파일 형식의 컨테이너로 내보낼 때 내보내기 프리셋의 호환성을 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-export-presets:0024:0001"><a href="avassetexportsession/determinecompatibility(ofexportpreset:with:outputfiletype:completionhandler:">class func determineCompatibility(ofExportPreset: String, with: AVAsset, outputFileType: AVFileType?, completionHandler: (Bool) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-export-presets:0025:0001">출력 파일 형식의 컨테이너에서 자산을 내보내기 위한 내보내기 프리셋의 호환성을 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-export-presets:0026:0001">[class func exportPresets(compatibleWith: AVAsset) -&gt; [String]](avassetexportsession/exportpresets(compatiblewith:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-export-presets:0027:0001">자산에 대해 호환되는 내보내기 프리셋을 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-output:0028:0001">출력 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0029:0001"><a href="avassetexportsession/outputurl.md">var outputURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0030:0001">자산 내보내기 세션이 출력물을 쓰는 URL입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0031:0001"><a href="avassetexportsession/outputfiletype.md">var outputFileType: AVFileType?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0032:0001">자산 내보내기 세션이 쓰는 출력 파일 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0033:0001">[var supportedFileTypes: [AVFileType]](avassetexportsession/supportedfiletypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0034:0001">세션이 쓸 수 있는 파일 형식을 포함하는 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0035:0001"><a href="avassetexportsession/allowsparallelizedexport.md">var allowsParallelizedExport: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0036:0001">세션이 내보내기 작업을 병렬로 수행할 수 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0037:0001"><a href="avassetexportsession/shouldoptimizefornetworkuse.md">var shouldOptimizeForNetworkUse: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0038:0001">영화 영상을 네트워크 사용에 맞게 최적화할지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0039:0001"><a href="avassetexportsession/canperformmultiplepassesoversourcemediadata.md">var canPerformMultiplePassesOverSourceMediaData: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0040:0001">세션이 더 나은 결과를 위해 원본 미디어를 여러 번 처리할 수 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0041:0001"><a href="avassetexportsession/timerange.md">var timeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0042:0001">내보낼 원본 자산의 시간 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0043:0001"><a href="avassetexportsession/filelengthlimit.md">var fileLengthLimit: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0044:0001">세션의 출력이 초과해서는 안 되는 파일 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-output:0045:0001"><a href="avassetexportsession/directoryfortemporaryfiles.md">var directoryForTemporaryFiles: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-output:0046:0001">내보내기 프로세스에서 생성되는 임시 파일을 저장하기에 적합한 디렉터리입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-metadata:0047:0001">메타데이터 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-metadata:0048:0001">[var metadata: [AVMetadataItem]?](avassetexportsession/metadata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-metadata:0049:0001">내보내기 세션이 출력 컨테이너 파일에 기록하는 메타데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-metadata:0050:0001"><a href="avassetexportsession/metadataitemfilter.md">var metadataItemFilter: AVMetadataItemFilter?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-metadata:0051:0001">내보내기 세션이 출력 자산으로 전달하는 메타데이터 항목을 필터링하는 데 사용하는 개체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-video-output:0052:0001">비디오 출력 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-video-output:0053:0001"><a href="avassetexportsession/videocomposition.md">var videoComposition: AVVideoComposition?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-video-output:0054:0001">비디오 프레임을 합성하는 방법을 지정하는 선택적 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-video-output:0055:0001"><a href="avassetexportsession/customvideocompositor.md">var customVideoCompositor: (any AVVideoCompositing)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-video-output:0056:0001">비디오 프레임을 합성할 때 사용할 선택적 사용자 지정 개체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-track-groups:0057:0001">트랙 그룹 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-track-groups:0058:0001"><a href="avassetexportsession/audiotrackgrouphandling.md">var audioTrackGroupHandling: AVAssetTrackGroupOutputHandling</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-track-groups:0059:0001">세션이 대체 오디오 트랙을 내보내는 방식을 정의하는 정책입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-track-groups:0060:0001"><a href="avassettrackgroupoutputhandling.md">struct AVAssetTrackGroupOutputHandling</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-track-groups:0061:0001">트랙 그룹에서 대체 트랙을 처리하는 방식에 대한 정책을 지정하는 유형입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-audio-output:0062:0001">오디오 출력 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-output:0063:0001"><a href="avassetexportsession/audiomix.md">var audioMix: AVAudioMix?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-output:0064:0001">오디오 믹싱 매개변수와 내보내기에서 기본값이 아닌 오디오 믹싱을 사용 설정할지 여부를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-output:0065:0001"><a href="avassetexportsession/audiotimepitchalgorithm.md">var audioTimePitchAlgorithm: AVAudioTimePitchAlgorithm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-output:0066:0001">스케일링된 오디오 편집에서 오디오 피치를 관리하기 위한 처리 알고리즘입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:exporting-media:0067:0001">미디어 내보내기</span>

- <span class="ko-segment" data-segment-id="seg:list:exporting-media:0068:0001"><a href="avassetexportsession/export(to:as:isolation:">func export(to: URL, as: AVFileType, isolation: isolated (any Actor)?) async throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:exporting-media:0069:0001">자산을 지정한 파일 형식으로 출력 위치에 내보냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:exporting-media:0070:0001"><a href="avassetexportsession/cancelexport.md">func cancelExport()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:exporting-media:0071:0001">내보내기 세션의 실행을 취소합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:exporting-media:0072:0001"><a href="avassetexportsession/exportasynchronously(completionhandler:">func exportAsynchronously(completionHandler: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:exporting-media:0073:0001">내보내기 세션의 비동기 실행을 시작합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:monitoring-export-progress:0074:0001">내보내기 진행 상태 모니터링</span>

- <span class="ko-segment" data-segment-id="seg:list:monitoring-export-progress:0075:0001">[func states(updateInterval: TimeInterval) -&gt; some Sendable &amp; AsyncSequence&lt;AVAssetExportSession.State, Never&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:monitoring-export-progress:0076:0001">](avassetexportsession/states(updateinterval:).md) 내보내기 작업의 진행 상태를 모니터링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:monitoring-export-progress:0077:0001"><a href="avassetexportsession/state.md">AVAssetExportSession.State</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:monitoring-export-progress:0078:0001">내보내기 작업의 상태를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:monitoring-export-progress:0079:0001"><a href="avassetexportsession/status-swift.property.md">var status: AVAssetExportSession.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:monitoring-export-progress:0080:0001">내보내기 세션의 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:monitoring-export-progress:0081:0001"><a href="avassetexportsession/status-swift.enum.md">AVAssetExportSession.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:monitoring-export-progress:0082:0001">내보내기 세션의 상태를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:monitoring-export-progress:0083:0001"><a href="avassetexportsession/progress.md">var progress: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:monitoring-export-progress:0084:0001">내보내기 진행률을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:monitoring-export-progress:0085:0001"><a href="avassetexportsession/error.md">var error: (any Error)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:monitoring-export-progress:0086:0001">선택적 오류 개체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:estimating-file-length-and-duration:0087:0001">파일 길이 및 기간 추정</span>

- <span class="ko-segment" data-segment-id="seg:list:estimating-file-length-and-duration:0088:0001"><a href="avassetexportsession/estimateoutputfilelength(completionhandler:">func estimateOutputFileLength(completionHandler: (Int64, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimating-file-length-and-duration:0089:0001">자산, 프리셋 및 시간 범위 구성을 고려해 내보내기의 출력 파일 길이 추정을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:estimating-file-length-and-duration:0090:0001"><a href="avassetexportsession/estimatedoutputfilelength.md">var estimatedOutputFileLength: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimating-file-length-and-duration:0091:0001">내보낸 파일의 추정 길이(바이트)입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:estimating-duration:0092:0001">기간 추정</span>

- <span class="ko-segment" data-segment-id="seg:list:estimating-duration:0093:0001"><a href="avassetexportsession/estimatemaximumduration(completionhandler:">func estimateMaximumDuration(completionHandler: (CMTime, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimating-duration:0094:0001">자산, 프리셋 및 시간 범위 구성을 고려해 내보내기의 최대 기간 추정을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:estimating-duration:0095:0001"><a href="avassetexportsession/maxduration.md">var maxDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimating-duration:0096:0001">내보낸 미디어의 최대 기간에 대한 추정값을 제공합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-the-asset:0097:0001">자산 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-the-asset:0098:0001"><a href="avassetexportsession/asset.md">var asset: AVAsset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-asset:0099:0001">세션이 내보내는 자산입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0100:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0101:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0102:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0103:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0104:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0104:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0104:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0104:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0104:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0104:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0105:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0106:0001"><a href="exporting-video-to-alternative-formats.md">Exporting video to alternative formats</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0107:0001">기존 동영상 파일을 다른 형식으로 변환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0109:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetexportsession">View on Apple Developer</a>*</span>
